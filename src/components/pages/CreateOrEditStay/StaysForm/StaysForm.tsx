import React from "react";
import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import "./StaysForm.scss";
import { ButtonTypes } from "../../../../types/types";
import { StayFields } from "./StayFields/StayFields";
import { GuestFields } from "./GuestFields/GuestFields";
import { ButtonLarge } from "../../../common/buttons/ButtonLarge/ButtonLarge";

export interface StayProps {
  apartment: string;
  startDate?: DateTime;
  endDate?: DateTime;
}

export const StaysForm = () => {
  const initialValues: StayProps = {
    apartment: "",
    startDate: DateTime.local(),
    endDate: DateTime.local()
  };
  return (
    <div className="stayFormContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        <Form className="stayForm">
          <StayFields />
          <GuestFields />
          <div>
            <p>Resumen</p>
          </div>

          <ButtonLarge
            text="Cargar estadía"
            className="submitButton"
            type={ButtonTypes.Submit}
          />
        </Form>
      </Formik>
    </div>
  );
};
