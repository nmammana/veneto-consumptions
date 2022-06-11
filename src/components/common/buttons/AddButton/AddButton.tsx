import React, { FC } from "react";
import { GoPlus } from "react-icons/go";
import "./AddButton.scss";

export interface AddButtonProps {
  className?: string;
  onClick: () => void;
}

export const AddButton: FC<AddButtonProps> = ({ className, onClick }) => (
  <button className={`addButton ${className}`} onClick={onClick}>
    <GoPlus className="icon" />
  </button>
);
