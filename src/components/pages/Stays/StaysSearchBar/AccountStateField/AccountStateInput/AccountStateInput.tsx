import { MenuItem, Select, ThemeProvider } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { StyleVariant } from "../../../../../../styles/model/themeVariant";
import { useMuiTheme } from "../../../../../../styles/model/useMuiTheme";

export const AccountStateInput: FC<FieldProps> = ({ field, form }) => {
  const style = StyleVariant.Primary;
  const muiTheme = useMuiTheme(style);
  const accountState = [
    { payed: true, label: "Sin deudas" },
    { payed: false, label: "Tiene deudas" }
  ];
  return (
    <ThemeProvider theme={muiTheme}>
      <Select
        fullWidth
        value={field.value ?? ""}
        onChange={event => {
          form.setFieldValue(field.name, event.target.value);
        }}
        labelId="payed"
        IconComponent={KeyboardArrowDown}
      >
        {accountState.map((state, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MenuItem key={index} /* value={state.payed} */>
            {state.label}
          </MenuItem>
        ))}
      </Select>
    </ThemeProvider>
  );
};
