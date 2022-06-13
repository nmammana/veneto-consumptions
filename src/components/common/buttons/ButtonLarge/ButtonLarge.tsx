import React, { FC } from "react";
import "./ButtonLarge.scss";

export interface ButtonLargeProps {
  onClick: () => void;
  text: string;
}

export const ButtonLarge: FC<ButtonLargeProps> = ({ onClick, text }) => {
  return (
    <button className="buttonLarge" onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};
