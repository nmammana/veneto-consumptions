import { InputAdornment, TextField, ThemeProvider } from "@material-ui/core";
import { FC as ReactFC } from "react";
import { StyleVariant } from "../../../styles/model/themeVariant";
import { useMuiTheme } from "../../../styles/model/useMuiTheme";
import { FC, IconC } from "../../../types/types";
import { withMemo } from "../../../utils/withMemo";
import { BaseIconButton } from "../BaseIconButton/BaseIconButton";

export enum TextInputVariant {
  Outlined = "outlined",
  Standard = "standard",
  Filled = "filled"
}

interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  variant?: TextInputVariant;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  StartIcon?: FC | IconC;
  onStartIconClick?: () => void;
  disabled?: boolean;
  style?: StyleVariant;
  startIconClassname?: string;
}

export const TextInputInt: ReactFC<TextInputProps> = ({
  value,
  onChange,
  variant,
  className,
  type,
  placeholder,
  isRequired = false,
  StartIcon,
  onStartIconClick,
  disabled = false,
  style = StyleVariant.Primary,
  startIconClassname
}) => {
  const muiTheme = useMuiTheme(style);
  return (
    <ThemeProvider theme={muiTheme}>
      <TextField
        className={className}
        value={value ?? ""}
        onChange={e => onChange?.(e.target.value)}
        variant={variant}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        disabled={disabled}
        InputProps={{
          ...(StartIcon && {
            startAdornment: (
              <InputAdornment position="start">
                {onStartIconClick ? (
                  <BaseIconButton
                    Icon={StartIcon}
                    onClick={onStartIconClick}
                    className={startIconClassname}
                  />
                ) : (
                  <StartIcon className={startIconClassname} />
                )}
              </InputAdornment>
            )
          })
        }}
      />
    </ThemeProvider>
  );
};

export const TextInput = withMemo(TextInputInt);
