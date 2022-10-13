import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonTypes, TableType } from "../../../../../types/types";
import { AuthContext } from "../../../../context/AuthContext";
import "./HeaderToolbar.scss";
import { LogoutPopup } from "./LogoutPopup/LogoutPopup";

interface HeaderItem {
  title: string;
  type?: TableType;
}

export const HeaderToolbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const items: HeaderItem[] = [
    { title: "Estadías", type: TableType.Stays },
    { title: "Consumos", type: TableType.Consumptions },
    { title: "Productos", type: TableType.Products }
  ];

  const onItemClick = (type?: TableType) => {
    switch (type) {
      case TableType.Stays:
        navigate("/estadias");
        return;
      case TableType.Products:
        navigate("/productos");
        return;
      case TableType.Consumptions:
        navigate("/consumos");
        return;
      default:
        navigate("/estadias");
    }
  };

  const onLogoutClick = () => {
    authContext?.logout();
    navigate("/");
  };

  return (
    <div className="headerToolbar">
      {items.map((item, index) => (
        <button
          className="button"
          onClick={() => onItemClick(item.type)}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type={ButtonTypes.Button}
        >
          <p className="buttonText">{item.title}</p>
        </button>
      ))}
      <LogoutPopup
        onLogoutClick={() => {
          onLogoutClick();
        }}
      />
    </div>
  );
};
