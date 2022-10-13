import React, { useContext } from "react";
import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import { ButtonSmall } from "../../../common/buttons/ButtonSmall/ButtonSmall";
import { ButtonTypes, StaySearchParams } from "../../../../types/types";
import { StaysContext } from "../../../context/StaysContext";
import "./StaySearchBar.scss";
import { ApartmentsField } from "./ApartmentField/ApartmentsField";
import { StartDateField } from "./StartDateField/StartDateField";
import { EndDateField } from "./EndDateField/EndDateField";
import { AccountStateField } from "./AccountStateField/AccountStateField";

export const StaysSearchBar = () => {
  const { setStaySearchParams } = useContext(StaysContext);
  const searchInitialValues: StaySearchParams = {
    start_date: DateTime.local().minus({ months: 1 }).toISO()
  };

  const setSearchParamsByUrl = (values: StaySearchParams) => {
    setStaySearchParams({
      start_date: values.start_date
        ? DateTime.fromISO(values.start_date).toFormat("yyyy-MM-dd")
        : undefined,
      end_date: values.end_date
        ? DateTime.fromISO(values.end_date).toFormat("yyyy-MM-dd")
        : undefined,
      apartment: values.apartment,
      payed: values.payed
    });
  };

  return (
    <div className="staySearchBar">
      <Formik
        initialValues={searchInitialValues}
        onSubmit={values => {
          setSearchParamsByUrl(values);
        }}
      >
        <Form className="staySearchForm">
          <div className="formFields">
            <ApartmentsField className="field" />
            <StartDateField className="field" />
            <EndDateField className="field" />
            <AccountStateField className="field" />
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
