import React, { FC } from "react";
import { BiEditAlt } from "react-icons/bi";
import { User } from "../../../../../../../types/types";
import "./EditUserButton.scss";

interface EditUserButtonProps {
  user: User;
  editUser: (user: User) => void;
}

export const EditUserButton: FC<EditUserButtonProps> = ({ user, editUser }) => {
  return (
    <button
      className="editUserButton"
      type="button"
      onClick={() => editUser(user)}
    >
      <BiEditAlt className="icon" />
    </button>
  );
};
