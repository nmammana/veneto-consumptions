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
  const benefictName = benefictList.find(
    benefictItem => benefictItem.typeOfBenefict === typeOfBenefict
  )?.name;
  const benefictData = benefictName
    ? `${quantityAvailable} - ${benefictName} `
    : "-";
  return <p className="benefictItem">{benefictData}</p>;
};
