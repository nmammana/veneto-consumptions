import React, { useContext } from "react";
import { FieldProps } from "formik";
import { DateTime } from "luxon";
import { MaterialUiPickersDate } from "material-ui-pickers";
import { StaysContext } from "../../../../../../context/StaysContext";
import { withMemo } from "../../../../../../../utils/withMemo";
import { DateInput } from "../../../../../../common/DateInput/DateInput";

export const EndDateInputInt: React.FC<FieldProps> = ({ field, form }) => {
  const { setCurrentStay } = useContext(StaysContext);
  return (
    <DateInput
      onChange={(date: MaterialUiPickersDate) => {
        form.setFieldValue(field.name, date);
        setCurrentStay(currentStay => ({
          ...currentStay,
          end_date: date ? DateTime.fromISO(date).toFormat("dd/MM/yyyy") : ""
        }));
      }}
      value={field.value}
    />
  );
};

export const EndDateInput = withMemo(EndDateInputInt) as typeof EndDateInputInt;
