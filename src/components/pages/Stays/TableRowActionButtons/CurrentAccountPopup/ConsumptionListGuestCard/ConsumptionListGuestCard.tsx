import { head } from "lodash";
import React, { FC } from "react";
import { Consumption } from "../../../../../../types/types";
import { getFullNameFromPerson } from "../../../../../../utils/helpers";
import { ButtonSmall } from "../../../../../common/buttons/ButtonSmall/ButtonSmall";

interface ConsumptionListGuestCardProps {
  onPayOffClick: () => void;
  consumptions: Consumption[];
}

export const ConsumptionListGuestCard: FC<ConsumptionListGuestCardProps> = ({
  onPayOffClick,
  consumptions
}) => {
  const user = head(consumptions)?.user_stay.user;
  const firstName = user?.first_name;
  const lastName = user?.last_name;
  const fullName = getFullNameFromPerson(firstName, lastName);

  return (
    <div className="guestCard">
      <div className="nameContainer">
        <p className="title">Nombre y apellido</p>
        <p className="content">{fullName}</p>
      </div>
      <div className="consumptionsContainer">
        <p className="title">Consumos</p>
        <div className="benefictsList">
          <p className="content">Almuerzo vegetariano x 2 $500</p>
          <p className="content">Desayuno completo x 3 $350</p>
        </div>
      </div>
      <div className="separator" />
      <div className="accountSummary">
        <div className="totalAmountContainer">
          <p className="totalTitle">Total</p>
          <p className="totalValue">$2050</p>
        </div>
        <ButtonSmall onClick={() => onPayOffClick()} text="Saldar" />
      </div>
    </div>
  );
};
