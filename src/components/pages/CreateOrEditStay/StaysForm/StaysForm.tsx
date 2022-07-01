import React from "react";
import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import "./StaysForm.scss";
import { StayFields } from "./StayFields/StayFields";
import { GuestFields } from "./GuestFields/GuestFields";
import { StaySummary } from "./StaySummary/StaySummary";

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
          <StaySummary />
        </Form>
      </Formik>
    </div>
  );
};
