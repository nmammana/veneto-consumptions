import React, { FC } from "react";
import { ButtonTypes } from "../../../../types/types";
import "./ButtonSmall.scss";

export interface ButtonSmallProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
}

export const ButtonSmall: FC<ButtonSmallProps> = ({
  onClick,
  text,
  type,
  className,
  disabled
}) => {
  return (
    <button
      type={type}
      className={`${className} buttonSmall ${disabled && "disabled"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
};
