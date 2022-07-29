import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TableType } from "../../../../../types/types";
import { AuthContext } from "../../../../context/AuthContext";
import "./HeaderToolbar.scss";

interface HeaderItem {
  title: string;
  type?: TableType;
}

export const HeaderToolbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const items: HeaderItem[] = [
    { title: "Estadías", type: TableType.Stays },
    { title: "Productos", type: TableType.Products }
  ];

  const onItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent,
    type?: TableType
  ) => {
    event.stopPropagation();
    if (type === TableType.Stays) {
      navigate("/stays");
    } else if (type === TableType.Products) {
      navigate("/products");
    }
  };

  const onLogoutClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent
  ) => {
    event.stopPropagation();
    authContext?.logout();
    navigate("/");
  };

  return (
    <div className="headerToolbar">
      {items.map((item, index) => (
        <div
          className="item"
          onClick={e => onItemClick(e, item.type)}
          onKeyDown={onItemClick}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          role="button"
          tabIndex={0}
        >
          <p className="itemText">{item.title}</p>
        </div>
      ))}
      <div
        className="item"
        onClick={onLogoutClick}
        onKeyDown={onLogoutClick}
        // eslint-disable-next-line react/no-array-index-key
        role="button"
        tabIndex={0}
      >
        <p className="itemText">Salir</p>
      </div>
    </div>
  );
};
