import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Consumption } from "../../../types/types";
import { Layout } from "../../common/Layout/Layout";
import { Spinner } from "../../common/Spinner/Spinner";
import { AxiosContext } from "../../context/AxiosContext";
import { ConsumptionsTable } from "../../common/ConsumptionsTable/ConsumptionsTable";
import "./UserConsumptions.scss";

export const UserConsumptions = () => {
  const params = useParams();
  const { qrCode } = params;

  const { publicAxios } = useContext(AxiosContext);
  const [isLoadingConsumptions, setIsLoadingConsumptions] =
    useState<boolean>(false);
  const [consumptionList, setConsumptionList] = useState<Consumption[]>();

  const getConsumptionsByQRCode = useCallback(async (): Promise<
    Consumption[]
  > => {
    const consumptionsResponse = await publicAxios.get(
      `/consumption/?user_stay__qr_code=${qrCode}`
    );
    return consumptionsResponse.data;
  }, [publicAxios, qrCode]);

  const fetchConsumptionList = useCallback(async () => {
    const consumptionRes = await getConsumptionsByQRCode();
    setConsumptionList(consumptionRes);
  }, [getConsumptionsByQRCode]);

  useEffect(() => {
    if (qrCode) {
      setIsLoadingConsumptions(true);
      fetchConsumptionList();
      setIsLoadingConsumptions(false);
    }
  }, [fetchConsumptionList, qrCode]);

  if (!consumptionList)
    return (
      <Layout>
        <Spinner />
      </Layout>
    );

  return (
    <Layout>
      <div className="userConsumptions">
        <ConsumptionsTable
          consumptionList={consumptionList}
          isLoadingConsumptions={isLoadingConsumptions}
        />
      </div>
    </Layout>
  );
};
