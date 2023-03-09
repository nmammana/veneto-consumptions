import { isEmpty, reduce, some } from "lodash";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Consumption,
  notUndefined,
  Stay,
  Optional,
  Apartment
} from "../../../types/types";
import { Layout } from "../../common/Layout/Layout";
import { Spinner } from "../../common/Spinner/Spinner";
import { AxiosContext } from "../../context/AxiosContext";
import { ConsumptionsTable } from "../../common/ConsumptionsTable/ConsumptionsTable";
import "./StayConsumptions.scss";
import { toastDefaultConfig } from "../../../utils/toast";
import { roundNumberToSecondDecimal } from "../../../utils/helpers";
import { PayOffAllConsumptionsPopup } from "./PayOffAllConsumptionsPopup/PayOffAllConsumptionsPopup";
import { PayOffSelectedConsumptionsPopup } from "./PayOffSelectedConsumptionsPopup/PayOffSelectedConsumptionsPopup";
import { StaysContext } from "../../context/StaysContext";

const getTotalValuesFromConsumptionList = (
  consumptionList?: Consumption[]
): Optional<number[]> => {
  return consumptionList
    ?.filter(consumption => consumption.payed === false)
    .map(consumption => consumption.total)
    .filter(notUndefined);
};

const getTotalValuesFromConsumptionSelectedList = (
  consumptionSelectedIdList: number[],
  consumptionList?: Consumption[]
): Optional<number[]> => {
  return consumptionSelectedIdList
    .map(
      id => consumptionList?.find(consumption => consumption.id === id)?.total
    )
    .filter(notUndefined);
};

export const StayConsumptions = () => {
  const params = useParams();
  const stayId = Number(params.stayId);

  const { authAxios } = useContext(AxiosContext);
  const { stayList, setStayList } = useContext(StaysContext);
  const [isLoadingConsumptions, setIsLoadingConsumptions] =
    useState<boolean>(false);
  const [consumptionList, setConsumptionList] = useState<Consumption[]>();
  const [stay, setStay] = useState<Stay>();
  const [apartment, setApartment] = useState<Apartment>();
  const [consumptionIdsSelected, setConsumptionIdsSelected] = useState<
    number[]
  >([]);

  const getStayById = useCallback(async (): Promise<Stay> => {
    const stayResponse = await authAxios.get(`stay/${stayId}`);
    return stayResponse.data;
  }, [authAxios, stayId]);

  const fetchStay = useCallback(async () => {
    const stayRes = await getStayById();
    setStay(stayRes);
  }, [getStayById]);

  const getConsumptionsByStayId = useCallback(async (): Promise<
    Consumption[]
  > => {
    const consumptionsResponse = await authAxios.get(
      `/consumption/?stay=${stayId}`
    );
    return consumptionsResponse.data;
  }, [authAxios, stayId]);

  const fetchConsumptionsTableItems = useCallback(async () => {
    const consumptionRes = await getConsumptionsByStayId();
    setConsumptionList(consumptionRes);
  }, [getConsumptionsByStayId]);

  const getApartmentById = useCallback(
    async (apartmentId: number): Promise<Apartment> => {
      const apartmentResponse = await authAxios.get(
        `/apartments/${apartmentId}`
      );
      return apartmentResponse.data;
    },
    [authAxios]
  );

  const fetchApartment = useCallback(
    async (apartmentId: number) => {
      const apartmentRes = await getApartmentById(apartmentId);
      setApartment(apartmentRes);
    },
    [getApartmentById]
  );

  const payOffAllConsumptions = async () => {
    try {
      const paymentResponse = await authAxios.post("/consumption/pay/", {
        stay_id: stayId
      });
      if (paymentResponse.data) {
        toast.success(paymentResponse.data.details, toastDefaultConfig);
        const updatedStayList = stayList.map(s => {
          if (s.id === stayId) {
            return { ...s, payed: true };
          }
          return s;
        });
        setStayList(updatedStayList);
      }
    } catch (error) {
      toast.error(
        "Ocurrió un error al saldar los consumos",
        toastDefaultConfig
      );
    }
  };

  const onPayOffAllConsumptionsClick = () => {
    payOffAllConsumptions();
    setConsumptionList(
      consumptionList?.map(consumption => {
        return {
          ...consumption,
          payed: true
        };
      })
    );
    setConsumptionIdsSelected([]);
  };

  const payOffSelectedConsumptions = async () => {
    try {
      const paymentResponse = await authAxios.post("/consumption/pay/", {
        consumptions: consumptionIdsSelected
      });
      if (paymentResponse.data) {
        toast.success(paymentResponse.data.details, toastDefaultConfig);
      }
    } catch (error) {
      toast.error(
        "Ocurrió un error al saldar los consumos",
        toastDefaultConfig
      );
    }
  };

  const onPayOffSelectedConsumptionsClick = () => {
    payOffSelectedConsumptions();
    setConsumptionList(
      consumptionList?.map(consumption => {
        if (some(consumptionIdsSelected, id => id === consumption.id)) {
          return {
            ...consumption,
            payed: true
          };
        }
        return {
          ...consumption
        };
      })
    );
    setConsumptionIdsSelected([]);
  };

  useEffect(() => {
    if (stayId) {
      setIsLoadingConsumptions(true);
      fetchStay();
      fetchConsumptionsTableItems();
    }
    setIsLoadingConsumptions(false);
  }, [fetchConsumptionsTableItems, fetchStay, stayId]);

  useEffect(() => {
    if (stay?.apartment) {
      fetchApartment(stay?.apartment);
    }
  }, [fetchApartment, stay?.apartment]);

  if (!stay && !consumptionList)
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  const stayName = stay?.id ? `Estadía ${stay?.id}` : undefined;
  const stayTitle = [stayName, stay?.start_date, stay?.end_date]
    .filter(notUndefined)
    .join(" - ");
  const total = reduce(
    getTotalValuesFromConsumptionList(consumptionList),
    (sum, n) => sum + n
  );
  const payTotalText = total
    ? `Pagar estadía: $${roundNumberToSecondDecimal(total)}`
    : "No tiene pagos pendientes";
  const isPayTotalButtonDisabled = !total;
  const totalSelected = reduce(
    getTotalValuesFromConsumptionSelectedList(
      consumptionIdsSelected,
      consumptionList
    ),
    (sum, n) => sum + n
  );
  const paySelectedText = [
    "Pagar seleccionados",
    roundNumberToSecondDecimal(totalSelected)
  ]
    .filter(notUndefined)
    .join(": $");

  return (
    <Layout>
      <div className="consumptionsHeaderContainer">
        <div className="stayDataTitle">
          <p className="stayTitle">{stayTitle}</p>
          {apartment?.name && (
            <p className="apartmentName">{apartment?.name}</p>
          )}
        </div>
        <div className="payButtonsContainer">
          <PayOffAllConsumptionsPopup
            payTotalText={payTotalText}
            onPayOffAllConsumptionsClick={onPayOffAllConsumptionsClick}
            disabled={isPayTotalButtonDisabled}
          />
          <PayOffSelectedConsumptionsPopup
            paySelectedText={paySelectedText}
            onPayOffSelectedConsumptionsClick={
              onPayOffSelectedConsumptionsClick
            }
            disabled={isEmpty(consumptionIdsSelected)}
          />
        </div>
      </div>
      <ConsumptionsTable
        consumptionList={consumptionList}
        isLoadingConsumptions={isLoadingConsumptions}
        setConsumptionIdsSelected={setConsumptionIdsSelected}
        isDinamicTable
      />
    </Layout>
  );
};
