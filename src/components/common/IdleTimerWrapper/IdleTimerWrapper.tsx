import React, { FC, ReactNode, useContext } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface Props {
  children?: ReactNode;
}

const HOUR_IN_MILLIS = 1000 * 60 * 60;
const maxHoursIdle = "2.0";

export const IdleTimerWrapper: FC<Props> = ({ children }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const onIdle = () => {
    authContext?.logout();
    navigate("/");
  };

  useIdleTimer({
    timeout: HOUR_IN_MILLIS * Number(maxHoursIdle),
    onIdle,
    eventsThrottle: 1000
  });

  return <div>{children}</div>;
};
