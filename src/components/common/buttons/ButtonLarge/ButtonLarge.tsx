import React, { FC } from "react";
import { ButtonTypes } from "../../../../types/types";
import { withMemo } from "../../../../utils/withMemo";
import "./ButtonLarge.scss";

export interface ButtonLargeProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
}

export const ButtonLargeInt: FC<ButtonLargeProps> = ({
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

export const ButtonLarge = withMemo(ButtonLargeInt);
