import { DateTime } from "luxon";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Consumption,
  ConsumptionSearchParams,
  notUndefined
} from "../../../types/types";
import { ConsumptionsTable } from "../../common/ConsumptionsTable/ConsumptionsTable";
import { Layout } from "../../common/Layout/Layout";
import { Spinner } from "../../common/Spinner/Spinner";
import { AuthContext } from "../../context/AuthContext";
import { AxiosContext } from "../../context/AxiosContext";
import { StayConsumptionStatistics } from "../Stays/StaysConsumptionStatistics/StaysConsumptionStatistics";
import { ConsumptionsSearchBar } from "./ConsumptionsSearchBar/ConsumptionsSearchBar";

export const Consumptions = () => {
  const { authState } = useContext(AuthContext);
  const { authenticated } = authState;
  const { authAxios } = useContext(AxiosContext);
  const [isLoadingConsumptions, setIsLoadingConsumptions] =
    useState<boolean>(false);
  const [consumptionList, setConsumptionList] = useState<Consumption[]>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [consumptionSearchParams, setConsumptionSearchParams] =
    useState<ConsumptionSearchParams>({
      added_after: DateTime.fromISO(
        DateTime.local().minus({ months: 1 }).toISO()
      ).toFormat("yyyy-MM-dd"),
      added_before: undefined
    });

  const getConsumptionsQueryParams = useCallback(() => {
    const addedAfterSearchParam = consumptionSearchParams.added_after
      ? `added_after=${consumptionSearchParams.added_after}`
      : undefined;
    const addedBeforeSearchParam = consumptionSearchParams.added_before
      ? `added_before=${consumptionSearchParams.added_before}`
      : undefined;
    return [addedAfterSearchParam, addedBeforeSearchParam]
      .filter(notUndefined)
      .join("&");
  }, [consumptionSearchParams]);

  const setSearchParamsByUrl = (values: ConsumptionSearchParams) => {
    setConsumptionSearchParams({
      added_after: values.added_after
        ? DateTime.fromISO(values.added_after).toFormat("yyyy-MM-dd")
        : undefined,
      added_before: values.added_before
        ? DateTime.fromISO(values.added_before).toFormat("yyyy-MM-dd")
        : undefined
    });
  };

  const getConsumptionList = useCallback(async (): Promise<Consumption[]> => {
    const consumptionsResponse = await authAxios.get(
      `/consumption?${getConsumptionsQueryParams()}`
    );
    return consumptionsResponse.data;
  }, [authAxios, getConsumptionsQueryParams]);

  const fetchConsumptionList = useCallback(async () => {
    const consumptionRes = await getConsumptionList();
    setConsumptionList(consumptionRes);
  }, [getConsumptionList]);

  useEffect(() => {
    if (authenticated) {
      setIsLoadingConsumptions(true);
      fetchConsumptionList();
      setIsLoadingConsumptions(false);
    }
  }, [fetchConsumptionList, authenticated]);

  if (!consumptionList)
    return (
      <Layout>
        <Spinner />
      </Layout>
    );

  return (
    <Layout>
      <ConsumptionsSearchBar
        setSearchParamsByUrl={(values: ConsumptionSearchParams) =>
          setSearchParamsByUrl(values)
        }
      />
      <StayConsumptionStatistics />
      <ConsumptionsTable
        consumptionList={consumptionList}
        isLoadingConsumptions={isLoadingConsumptions}
      />
    </Layout>
  );
};
