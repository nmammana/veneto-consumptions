import React, { FC } from "react";
import { benefictList } from "../../../../../../../models/beneficts";
import { Benefict } from "../../../../../../../types/types";
import "./BenefictItem.scss";

interface BenefictItemProps {
  benefict: Benefict;
}

export const BenefictItem: FC<BenefictItemProps> = ({ benefict }) => {
  const typeOfBenefict = benefict.type_of_benefit;
  const quantityAvailable = benefict.quantity_available;
  const { quantity } = benefict;
  const benefictName = benefictList.find(
    benefictItem => benefictItem.typeOfBenefict === typeOfBenefict
  )?.name;
  const benefictData = benefictName
    ? `${benefictName} : Cant. total: ${quantity} | Cant. restante: ${quantityAvailable}`
    : "-";
  return <p className="benefictItem">{benefictData}</p>;
};
