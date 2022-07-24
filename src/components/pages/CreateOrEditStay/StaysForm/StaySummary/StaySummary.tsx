import { isEmpty } from "lodash";
import React, { FC } from "react";
import { ButtonTypes, Stay, User } from "../../../../../types/types";
import { ButtonLarge } from "../../../../common/buttons/ButtonLarge/ButtonLarge";
import "./StaySummary.scss";
import { StayUserSummary } from "./StayUserSummary/StayUserSummary";

interface StaySummaryProps {
  stay: Stay;
  deleteUser: (user: User) => void;
  editUser: (user: User) => void;
}

export const StaySummary: FC<StaySummaryProps> = ({
  stay,
  deleteUser,
  editUser
}) => {
  const { users } = stay;
  return (
    <div className="staySummary">
      <p className="summaryTitle">Resumen</p>
      {!isEmpty(users) && (
        <div className="summaryContainer">
          <p className="guestSummaryTitle">Huéspedes y beneficios</p>
          {users.map((user, index) => (
            <StayUserSummary
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              guest={user}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          ))}
        </div>
      )}
      <ButtonLarge
        text="Cargar estadía"
        className="submitButton"
        type={ButtonTypes.Submit}
        disabled={isEmpty(users)}
      />
    </div>
  );
};
