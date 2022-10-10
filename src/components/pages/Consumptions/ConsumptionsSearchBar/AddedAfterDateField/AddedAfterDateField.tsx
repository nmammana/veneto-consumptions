import { Field } from "formik";
import React from "react";
import { AddedAfterDateInput } from "./AddedAfterDateInput/AddedAfterDateInput";
import "./AddedAfterDateField.scss";

export const AddedAfterDateField = () => {
  return (
    <div className="addedAfterDateField">
      <label className="formLabel" htmlFor="addedAfter">
        Añadida luego de
      </label>
      <Field
        id="addedAfter"
        name="added_after"
        component={AddedAfterDateInput}
      />
    </div>
  );
};
