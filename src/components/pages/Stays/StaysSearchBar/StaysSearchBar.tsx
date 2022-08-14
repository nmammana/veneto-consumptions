import React, { useContext } from "react";
import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import { ButtonMiddle } from "../../../common/buttons/ButtonMiddle/ButtonMiddle";
import { ButtonTypes, StaySearchParams } from "../../../../types/types";
import { StaysContext } from "../../../context/StaysContext";
import "./StaySearchBar.scss";
import { ApartmentsField } from "./ApartmentField/ApartmentsField";
import { StartDateField } from "./StartDateField/StartDateField";
import { EndDateField } from "./EndDateField/EndDateField";

export const StaysSearchBar = () => {
  const { setStaySearchParams } = useContext(StaysContext);
  const searchInitialValues: StaySearchParams = {
    start_date: DateTime.local().minus({ months: 1 }).toISO(),
    end_date: DateTime.local().toISO()
  };

  const setSearchParamsByUrl = async (values: StaySearchParams) => {
    setStaySearchParams({
      start_date: values.start_date
        ? DateTime.fromISO(values.start_date).toFormat("yyyy-MM-dd")
        : "",
      end_date: values.end_date
        ? DateTime.fromISO(values.end_date).toFormat("yyyy-MM-dd")
        : "",
      apartment: values.apartment
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
            <ApartmentsField className="apartmentField" />
            <StartDateField />
            <EndDateField />
          </div>

          <ButtonMiddle
            text="Buscar"
            className="submitButton"
            type={ButtonTypes.Submit}
          />
        </Form>
      </Formik>
    </div>
  );
};
