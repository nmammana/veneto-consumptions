import { Field } from "formik";
import React from "react";
import { AddedBeforeDateInput } from "./AddedBeforeDateInput/AddedBeforeDateInput";
import "./AddedBeforeDateField.scss";

export const AddedBeforeDateField = () => {
  return (
    <div className="addedBeforeDateField">
      <label className="formLabel" htmlFor="addedBefore">
        Añadida antes de
      </label>
      <Field
        id="addedBefore"
        name="added_before"
        component={AddedBeforeDateInput}
      />
    </div>
  );
};
