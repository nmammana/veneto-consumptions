import { isString, Optional } from "../../types/types";

export type Dimension = string | number;

const rootElementSize = 16;

export const pxToRemNumber = (pxSize: number): number =>
  pxSize / rootElementSize;

export const pxToRem = (pxSize: number): string =>
  `${pxToRemNumber(pxSize)}rem`;

export const getDimensionPropertyValue = (
  dimension?: Dimension
): Optional<string> =>
  // eslint-disable-next-line no-nested-ternary
  dimension == null
    ? undefined
    : isString(dimension)
    ? dimension
    : pxToRem(dimension);
