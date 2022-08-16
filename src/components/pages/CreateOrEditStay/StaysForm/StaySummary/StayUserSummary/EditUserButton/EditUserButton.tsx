import React, { FC } from "react";
import { BiEditAlt } from "react-icons/bi";
import { ButtonTypes, User } from "../../../../../../../types/types";
import "./EditUserButton.scss";

interface EditUserButtonProps {
  user: User;
  editUser: (user: User) => void;
}

export const EditUserButton: FC<EditUserButtonProps> = ({ user, editUser }) => {
  return (
    <button
      className="editUserButton"
      type={ButtonTypes.Button}
      onClick={() => editUser(user)}
    >
      <BiEditAlt className="icon" />
    </button>
  );
};
