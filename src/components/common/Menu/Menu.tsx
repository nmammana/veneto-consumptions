import React from "react";
import { MenuItem, Popover } from "@material-ui/core";
import { ReactElement } from "../../../types/types";

export interface MenuItemConfig<V> {
  itemId: string;
  text: string;
  title?: string;
  value: V;
}

export enum HorizontalPosition {
  Left = "left",
  Center = "center",
  Right = "right"
}

export enum VerticalPosition {
  Bottom = "bottom",
  Center = "center",
  Top = "top"
}

export interface MenuProps<V> {
  anchorOriginHorizontal?: HorizontalPosition | number;
  anchorOriginVertical?: VerticalPosition | number;
  className?: string;
  menuItems: MenuItemConfig<V>[];
  noOptionsText?: string;
  onOptionSelected?: (itemId: V) => void;
  selectedItem?: V;
  transformOriginHorizontal?: HorizontalPosition | number;
  transformOriginVertical?: VerticalPosition | number;
  width?: number;
  id?: string;
  anchorEl?: HTMLElement;
  open?: boolean;
  onClose?: () => void;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  disableAutoFocus?: boolean | undefined;
  disableEnforceFocus?: boolean | undefined;
  disableRestoreFocus?: boolean | undefined;
}

export const Menu = <V,>({
  className,
  onOptionSelected,
  selectedItem,
  width,
  anchorOriginHorizontal = HorizontalPosition.Center,
  anchorOriginVertical = VerticalPosition.Bottom,
  menuItems = [],
  noOptionsText = "",
  open = false,
  transformOriginHorizontal = HorizontalPosition.Center,
  transformOriginVertical = VerticalPosition.Top,
  ...rest
}: MenuProps<V>): ReactElement => {
  /* const isSelectedItem = (option: V): boolean => {
    return option === selectedItem;
  }; */
  /* const paperClasses = usePaperStyle({ width });
  const menuItemClasses = useMenuItemStyle();
  const menuItemTextClasses = useMenuItemTextStyle(); */
  return (
    <Popover
      {...rest}
      className={className}
      anchorOrigin={{
        horizontal: anchorOriginHorizontal,
        vertical: anchorOriginVertical
      }}
      open={open}
      /* PaperProps={{ classes: paperClasses }} */
      transformOrigin={{
        horizontal: transformOriginHorizontal,
        vertical: transformOriginVertical
      }}
    >
      {menuItems.length > 0 ? (
        menuItems.map(menuItem => (
          <MenuItem
            /* classes={menuItemClasses} */
            key={menuItem.itemId}
            onClick={() => {
              onOptionSelected?.(menuItem.value);
              rest.onClose?.();
            }}
            title={menuItem.title}
          >
            <span
            /* className={
                isSelectedItem(menuItem.value)
                  ? menuItemTextClasses.selectedText
                  : menuItemTextClasses.text
              } */
            >
              {menuItem.text}
            </span>
          </MenuItem>
        ))
      ) : (
        <MenuItem
          /* classes={menuItemClasses} */
          onClick={() => {
            rest.onClose?.();
          }}
          title={noOptionsText}
        >
          <span /* className={menuItemTextClasses.text} */>
            {noOptionsText}
          </span>
        </MenuItem>
      )}
    </Popover>
  );
};
