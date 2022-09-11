import React, { FC } from "react";
import { ButtonTypes } from "../../../../types/types";
import { withMemo } from "../../../../utils/withMemo";
import "./ButtonSmall.scss";

export interface ButtonSmallProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
}

export const ButtonSmallInt: FC<ButtonSmallProps> = ({
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

export const ButtonSmall = withMemo(ButtonSmallInt);
