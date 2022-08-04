import React, { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { User } from "../../../../../../../types/types";
import "./DeleteUserButton.scss";

interface DeleteUserButtonProps {
  user: User;
  deleteUser: (user: User) => void;
}

export const DeleteUserButton: FC<DeleteUserButtonProps> = ({
  user,
  deleteUser
}) => {
  return (
    <button
      className="deleteUserButton"
      type="button"
      onClick={() => deleteUser(user)}
    >
      <AiOutlineDelete className="icon" />
    </button>
  );
};
