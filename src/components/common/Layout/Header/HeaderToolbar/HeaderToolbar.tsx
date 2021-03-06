import React, { useContext } from "react";
import { TableType } from "../../../../../types/types";
import { AdminPageContext } from "../../../../context/AdminPageContext";
import "./HeaderToolbar.scss";

interface HeaderItem {
  title: string;
  type?: TableType;
}

export const HeaderToolbar = () => {
  const adminPageContext = useContext(AdminPageContext);
  const items: HeaderItem[] = [
    { title: "Estadías", type: TableType.Stays },
    { title: "Productos", type: TableType.Products },
    { title: "Salir", type: undefined }
  ];

  const onItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent,
    type?: TableType
  ) => {
    event.stopPropagation();
    if (type) {
      adminPageContext?.setTableType(type);
    }
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
    </div>
  );
};
