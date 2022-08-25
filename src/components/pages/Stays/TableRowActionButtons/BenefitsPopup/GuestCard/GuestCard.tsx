import { isEmpty } from "lodash";
import React, { FC } from "react";
import { User } from "../../../../../../types/types";
import { getFullNameFromPerson } from "../../../../../../utils/helpers";
import { BenefitItem } from "./BenefitItem/BenefitItem";
import "./GuestCard.scss";

interface GuestCardProps {
  guest: User;
}

export const GuestCard: FC<GuestCardProps> = ({ guest }) => {
  const { user, benefits } = guest;

  const guestFullName = getFullNameFromPerson(user.first_name, user.last_name);
  const benefitsWithQuantity =
    benefits?.filter(benefit => benefit.quantity && benefit.quantity > 0) ?? [];

  return (
    <div className="guestCard">
      <div className="nameContainer">
        <p className="title">Nombre y apellido</p>
        <p className="guestName">{guestFullName}</p>
      </div>
      <div className="benefitsContainer">
        {!isEmpty(benefitsWithQuantity) && <p className="title">Beneficio</p>}
        <div className="benefitsList">
          {benefitsWithQuantity?.map((benefit, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <BenefitItem benefit={benefit} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
