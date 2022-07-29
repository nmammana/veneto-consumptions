import React, { FC } from "react";
import { ButtonTypes } from "../../../../types/types";
import "./ButtonMiddle.scss";

export interface ButtonMiddleProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
}

export const ButtonMiddle: FC<ButtonMiddleProps> = ({
  onClick,
  text,
  type,
  className,
  disabled
}) => {
  return (
    <button
      type={type}
      className={`buttonMiddle ${className} ${disabled && "disabled"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
};
