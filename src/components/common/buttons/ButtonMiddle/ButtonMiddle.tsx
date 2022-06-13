import React, { FC } from "react";
import "./ButtonMiddle.scss";

export interface ButtonMiddleProps {
  onClick: () => void;
  text: string;
}

export const ButtonMiddle: FC<ButtonMiddleProps> = ({ onClick, text }) => {
  return (
    <button className="buttonMiddle" onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};
