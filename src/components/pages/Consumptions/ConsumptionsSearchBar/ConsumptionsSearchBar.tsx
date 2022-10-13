import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import React, { FC } from "react";
import { ButtonTypes, ConsumptionSearchParams } from "../../../../types/types";
import { ButtonSmall } from "../../../common/buttons/ButtonSmall/ButtonSmall";
import { AddedAfterDateField } from "./AddedAfterDateField/AddedAfterDateField";
import { AddedBeforeDateField } from "./AddedBeforeDateField/AddedBeforeDateField";
import "./ConsumptionsSearchBar.scss";

interface ConsumptionsSearchBarProps {
  setSearchParamsByUrl: (values: ConsumptionSearchParams) => void;
}

export const ConsumptionsSearchBar: FC<ConsumptionsSearchBarProps> = ({
  setSearchParamsByUrl
}) => {
  const searchInitialValues: ConsumptionSearchParams = {
    added_after: DateTime.local().minus({ months: 1 }).toISO(),
    added_before: undefined
  };

  return (
    <div className="consumptionsSearchBar">
      <Formik
        initialValues={searchInitialValues}
        onSubmit={values => {
          setSearchParamsByUrl(values);
        }}
      >
        <Form className="consumptionsSearchForm">
          <div className="formFields">
            <AddedAfterDateField />
            <AddedBeforeDateField />
          </div>

          <ButtonSmall
            text="Buscar"
            className="submitButton"
            type={ButtonTypes.Submit}
          />
        </Form>
      </Formik>
    </div>
  );
};
