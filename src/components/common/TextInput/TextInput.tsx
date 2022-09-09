import { TextField } from "@material-ui/core";
import { FC } from "react";
import { withMemo } from "../../../utils/withMemo";

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
}

export const TextInputInt: FC<TextInputProps> = ({
  value,
  onChange,
  variant,
  className,
  type,
  placeholder,
  isRequired = false
}) => {
  return (
    <TextField
      className={className}
      value={value ?? ""}
      onChange={e => onChange?.(e.target.value)}
      variant={variant}
      type={type}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};

export const TextInput = withMemo(TextInputInt);
