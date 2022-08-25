import React, { useCallback, useContext, useEffect, useState } from "react";
import { notUndefined, Totals } from "../../../../types/types";
import { AuthContext } from "../../../context/AuthContext";
import { AxiosContext } from "../../../context/AxiosContext";
import { StaysContext } from "../../../context/StaysContext";
import { BenefitStatisticsCard } from "./BenefitStatisticsCard/BenefitStatisticsCard";
import { TotalAmountCard } from "./TotalAmountCard/TotalAmountCard";
import "./StaysConsumptionStatistics.scss";

export const StayConsumptionStatistics = () => {
  const { authAxios } = useContext(AxiosContext);
  const { authState } = useContext(AuthContext);
  const { authenticated } = authState;
  const { staySearchParams } = useContext(StaysContext);
  const [isLoadingTotals, setIsLoadingTotals] = useState<boolean>(false);
  const [totals, setTotals] = useState<Totals>();

  const startDate = staySearchParams.start_date;
  const endDate = staySearchParams.end_date;

  const getStaysConsumptionTotals = useCallback(async (): Promise<Totals> => {
    const startDateQueryParam = startDate
      ? `date_from=${startDate}`
      : undefined;
    const endDateQueryParam = endDate ? `date_to=${endDate}` : undefined;
    const totalsQueryParams = [startDateQueryParam, endDateQueryParam]
      .filter(notUndefined)
      .join("&");
    const consumptionTotalsResponse = await authAxios.get(
      `consumption/totals?${totalsQueryParams}`
    );
    return consumptionTotalsResponse.data;
  }, [authAxios, startDate, endDate]);

  const fetchStaysConsumptionTotals = useCallback(async () => {
    setIsLoadingTotals(true);
    const totalsRes = await getStaysConsumptionTotals();
    setTotals(totalsRes);
    setIsLoadingTotals(false);
  }, [getStaysConsumptionTotals]);

  useEffect(() => {
    if (authenticated) {
      fetchStaysConsumptionTotals();
    }
  }, [authenticated, fetchStaysConsumptionTotals]);

  if (isLoadingTotals || !totals) return null;

  const { types, amount } = totals;

  return (
    <div className="staysConsumptionStatistics">
      {types.map((typeTotals, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <BenefitStatisticsCard benefitStatistics={typeTotals} key={index} />
      ))}

      <TotalAmountCard amount={amount} />
    </div>
  );
};
