import React, { FC } from "react";
import "./PayingTag.scss";

interface PayingTagProps {
  className?: string;
  payed?: boolean;
}

export const PayingTag: FC<PayingTagProps> = ({ className, payed }) => {
  const text = payed ? "Pagado" : "Pendiente";

  return (
    <div className={`payingTag ${className} ${payed ? "payed" : "pending"}`}>
      <p className="tagText">{text}</p>
    </div>
  );
};
