import React, { useRef, useState } from "react";
import { Form, Formik } from "formik";
import "./StaysForm.scss";
import { StayFields } from "./StayFields/StayFields";
import { GuestFields } from "./GuestFields/GuestFields";
import { StaySummary } from "./StaySummary/StaySummary";
import { Stay } from "../../../../types/types";

export const StaysForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stay, setStay] = useState<Stay>({});
  const ref = useRef(null);
  const onAddGuestClick = () => {
    console.log("add guest button clicked", ref);
  };

  return (
    <div className="stayFormContainer">
      <Formik
        initialValues={stay}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        innerRef={ref}
      >
        <Form className="stayForm">
          <StayFields />
          <GuestFields onAddGuestClick={onAddGuestClick} />
          <StaySummary />
        </Form>
      </Formik>
    </div>
  );
};
