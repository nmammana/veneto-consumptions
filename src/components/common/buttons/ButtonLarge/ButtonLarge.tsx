import React, { FC } from "react";
import { ButtonTypes } from "../../../../types/types";
import "./ButtonLarge.scss";

export interface ButtonLargeProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
}

export const ButtonLarge: FC<ButtonLargeProps> = ({
  onClick,
  text,
  type,
  className,
  disabled
}) => {
  return (
    <button
      type={type}
      className={`buttonLarge ${className} ${disabled && "disabled"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
};
