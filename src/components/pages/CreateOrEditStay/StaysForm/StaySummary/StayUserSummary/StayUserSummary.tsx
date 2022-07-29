import React, { FC } from "react";
import { User } from "../../../../../../types/types";
import { getFullNameFromPerson } from "../../../../../../utils/helpers";
import { DeleteUserButton } from "./DeleteUserButton/DeleteUserButton";
import { EditUserButton } from "./EditUserButton/EditUserButton";
import { StayUserBenefictSummary } from "./StayUserBenefictSummary/StayUserBenefictSummary";
import "./StayUserSummary.scss";

interface StayUserSummaryProps {
  guest: User;
  deleteUser: (user: User) => void;
  editUser: (user: User) => void;
}

export const StayUserSummary: FC<StayUserSummaryProps> = ({
  guest,
  deleteUser,
  editUser
}) => {
  const { user, benefits } = guest;
  const firstName = user.first_name;
  const lastName = user.last_name;
  const userFullName = getFullNameFromPerson(firstName, lastName);
  return (
    <div className="stayUserSummaryContainer">
      <div className="nameAndActions">
        <p className="fullName">{userFullName}</p>
        <div className="actionButtons">
          <EditUserButton user={guest} editUser={editUser} />
          <DeleteUserButton user={guest} deleteUser={deleteUser} />
        </div>
      </div>
      {benefits
        ?.filter(benefict => benefict.quantity > 0)
        .map((benefict, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StayUserBenefictSummary key={index} benefict={benefict} />
        ))}
    </div>
  );
};
