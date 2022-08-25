import { Tooltip } from "@material-ui/core";
import React, { FC } from "react";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./StayConsumptionsButton.scss";

interface StayConsumptionsButtonProps {
  stayId: number;
}

export const StayConsumptionsButton: FC<StayConsumptionsButtonProps> = ({
  stayId
}) => {
  return (
    <Tooltip title="Consumiciones">
      <Link to={`/consumos/${stayId}`} className="stayConsumptionsButton">
        <FiEye className="icon" />
      </Link>
    </Tooltip>
  );
};
