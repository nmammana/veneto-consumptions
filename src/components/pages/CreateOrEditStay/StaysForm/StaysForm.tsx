import React from "react";
import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import { ApartmentsField } from "./ApartmentField/ApartmentsField";
import { StartDateField } from "./StartDateField/StartDateField";
import { EndDateField } from "./EndDateField/EndDateField";
import "./StaysForm.scss";

export interface StayProps {
  apartment: string;
  startDate: DateTime;
  endDate: DateTime;
}

export const StaysForm = () => {
  const initialValues: StayProps = {
    apartment: "",
    startDate: DateTime.local(),
    endDate: DateTime.local()
  };
  return (
    <div className="stayFormContainer">
      <p className="stayFormTitle">Cargar/editar estadía</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        <Form className="stayForm">
          <ApartmentsField />
          <div className="dateFields">
            <StartDateField />
            <EndDateField />
          </div>
          <button className="submitButton" type="submit">
            Crear
          </button>
        </Form>
      </Formik>
    </div>
  );
};
