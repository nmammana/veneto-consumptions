import React, { FC } from "react";
import "./TotalAmountCard.scss";

interface TotalAmountCardProps {
  amount?: number;
}

export const TotalAmountCard: FC<TotalAmountCardProps> = ({ amount }) => {
  const amountStr = amount ? `$${amount}` : "$0";
  return (
    <div className="totalAmountCard">
      <p className="title">Total</p>
      <p className="value">{amountStr}</p>
    </div>
  );
};
