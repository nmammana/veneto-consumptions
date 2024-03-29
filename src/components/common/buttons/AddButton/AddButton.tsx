import React, { FC } from "react";
import { GoPlus } from "react-icons/go";
import { withMemo } from "../../../../utils/withMemo";
import "./AddButton.scss";

export interface AddButtonProps {
  className?: string;
  onClick: () => void;
}

export const AddButtonInt: FC<AddButtonProps> = ({ className, onClick }) => (
  <button className={`addButton ${className}`} onClick={onClick}>
    <GoPlus className="icon" />
  </button>
);

export const AddButton = withMemo(AddButtonInt);
