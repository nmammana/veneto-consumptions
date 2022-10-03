import ColorLib from "color";

export type Color = string;

export const colorChangeAlpha = (color: Color, alpha: number): Color =>
  ColorLib(color).alpha(alpha).string();
