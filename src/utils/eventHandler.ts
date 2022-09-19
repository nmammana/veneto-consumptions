import { MouseEvent, MouseEventHandler, KeyboardEvent } from "react";
import { Optional } from "../types/types";

export enum KeyboardKeys {
  Enter = "Enter",
  Escape = "Escape"
}

export const stopPropagAndPrevDef = (e: KeyboardEvent | MouseEvent): void => {
  e.stopPropagation();
  e.preventDefault();
};

export const stopPropagationWrapper =
  (h: Optional<MouseEventHandler>): Optional<MouseEventHandler> =>
  e => {
    if (h === undefined) return;
    stopPropagAndPrevDef(e);
    h(e);
  };
