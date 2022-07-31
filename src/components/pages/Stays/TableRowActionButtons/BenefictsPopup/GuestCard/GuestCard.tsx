import React, { FC } from "react";
import { User } from "../../../../../../types/types";
import { getFullNameFromPerson } from "../../../../../../utils/helpers";
import { BenefictItem } from "./BenefictItem/BenefictItem";
import "./GuestCard.scss";

interface GuestCardProps {
  guest: User;
}

export const GuestCard: FC<GuestCardProps> = ({ guest }) => {
  const { user, benefits } = guest;

  const guestFullName = getFullNameFromPerson(user.first_name, user.last_name);

  return (
    <div className="guestCard">
      <div className="nameContainer">
        <p className="title">Nombre y apellido</p>
        <p className="guestName">{guestFullName}</p>
      </div>
      <div className="benefictsContainer">
        <p className="title">Beneficio</p>
        <div className="benefictsList">
          {benefits
            ?.filter(
              benefict =>
                benefict.quantity_available && benefict.quantity_available > 0
            )
            .map((benefict, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <BenefictItem benefict={benefict} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
