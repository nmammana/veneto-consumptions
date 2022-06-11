import React, { FC } from "react";
import "./NewStayButton.scss";

export interface NewStayButtonProps {
  onClick: () => void;
}

export const NewStayButton: FC<NewStayButtonProps> = ({ onClick }) => (
  <button className="newStayButton" onClick={onClick}>
    <p>Nueva estadía</p>
    <p className="plusChar">+</p>
  </button>
);
