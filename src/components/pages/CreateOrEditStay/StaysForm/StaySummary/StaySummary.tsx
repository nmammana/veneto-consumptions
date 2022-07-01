import React from "react";
import { ButtonTypes } from "../../../../../types/types";
import { ButtonLarge } from "../../../../common/buttons/ButtonLarge/ButtonLarge";
import "./StaySummary.scss";

export const StaySummary = () => {
  return (
    <div className="staySummary">
      <p className="summaryTitle">Resumen</p>
      <ButtonLarge
        text="Cargar estadía"
        className="submitButton"
        type={ButtonTypes.Submit}
      />
    </div>
  );
};
