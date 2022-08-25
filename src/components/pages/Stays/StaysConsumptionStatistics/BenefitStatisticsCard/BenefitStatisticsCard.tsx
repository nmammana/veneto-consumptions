import React, { FC } from "react";
import { BenefitStatistics } from "../../../../../types/types";
import "./BenefitStatisticsCard.scss";

interface BenefitStatisticsCardProps {
  benefitStatistics: BenefitStatistics;
}

export const BenefitStatisticsCard: FC<BenefitStatisticsCardProps> = ({
  benefitStatistics
}) => {
  const { name, frees, quantity } = benefitStatistics;
  return (
    <div className="benefitStatisticsCard">
      <div className="benefitName">{name}</div>
      <div className="quantitiesContainer">
        <div className="nameQuantity">
          <p className="valueTitle">Consumos</p>
          <p className="value">{quantity}</p>
        </div>
        <div className="nameQuantity">
          <p className="valueTitle">Gratis</p>
          <p className="value">{frees}</p>
        </div>
      </div>
    </div>
  );
};
