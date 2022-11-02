import React, { FC, FocusEventHandler } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import { DateTime } from "luxon";
import { FormControl } from "@material-ui/core";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { BaseIconButton } from "../BaseIconButton/BaseIconButton";
import { CloseIcon, EventIcon } from "../../icons";
import { stopPropagationWrapper } from "../../../utils/eventHandler";
import { SizeVariant } from "../../../types/types";
import { useMuiTheme } from "../../../styles/model/useMuiTheme";
import { getDateTimeOverrides } from "./DateInputStyle";
import { StyleVariant } from "../../../styles/model/themeVariant";
import { Theme } from "../../../styles/model/theme";

export enum DateInputVariant {
  Outlined = "outlined",
  Standard = "standard",
  Filled = "filled"
}

export interface DateInputProps {
  value?: DateTime;
  onChange: (d?: DateTime) => void;
  disabled?: boolean;
  maxDate?: DateTime;
  minDate?: DateTime;
  label?: string;
  placeholder?: string;
  dateFormat?: string;
  clearable?: boolean;
  clearText?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  style?: StyleVariant;
  className?: string;
}

export const DateInput: FC<DateInputProps> = ({
  value,
  onChange,
  disabled,
  maxDate,
  minDate,
  label,
  placeholder,
  dateFormat = "dd/MM/yyyy",
  clearable = false,
  clearText,
  onBlur,
  style = StyleVariant.Primary,
  className
}) => {
  const theme = useTheme<Theme>();
  const muiTheme = useMuiTheme(style, getDateTimeOverrides(theme));
  return (
    <ThemeProvider theme={muiTheme}>
      <MuiPickersUtilsProvider locale="es-AR" utils={LuxonUtils}>
        <FormControl className={className}>
          <KeyboardDatePicker
            disabled={disabled}
            inputVariant={DateInputVariant.Standard}
            label={label}
            value={value ?? null}
            minDate={minDate}
            maxDate={maxDate}
            onChange={newValue => {
              onChange(newValue ?? undefined);
            }}
            helperText=""
            onBlur={onBlur}
            placeholder={placeholder}
            format={dateFormat}
            keyboardIcon={
              <>
                {clearable && value && !disabled && (
                  <BaseIconButton
                    title={clearText}
                    Icon={CloseIcon}
                    onClick={stopPropagationWrapper(() => onChange(undefined))}
                    size={SizeVariant.Small}
                  />
                )}
                <BaseIconButton Icon={EventIcon} />
              </>
            }
            KeyboardButtonProps={{
              edge: "end",
              disableRipple: true
            }}
            autoOk
          />
        </FormControl>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};
