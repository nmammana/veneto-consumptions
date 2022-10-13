import { MenuItem, Select, ThemeProvider } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { StyleVariant } from "../../../../../../styles/model/themeVariant";
import { useMuiTheme } from "../../../../../../styles/model/useMuiTheme";
import { AccountState } from "../../../../../../types/types";

export const AccountStateInput: FC<FieldProps> = ({ field, form }) => {
  const style = StyleVariant.Primary;
  const muiTheme = useMuiTheme(style);

  const accountStateList = [
    { state: AccountState.Payed, label: "Pagado" },
    { state: AccountState.Unpayed, label: "No pagado" },
    { state: AccountState.WithoutConsumptions, label: "Sin consumos" }
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
        {accountStateList.map((accountState, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MenuItem key={index} value={accountState.state}>
            {accountState.label}
          </MenuItem>
        ))}
      </Select>
    </ThemeProvider>
  );
};
