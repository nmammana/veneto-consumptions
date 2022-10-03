import { Property } from "csstype";
import { pxToRem } from "./dimension";

export interface ElevationConfig {
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  color: string;
  transitionS: number;
}

export interface ElevationResult {
  transition?: Property.Transition;
  "box-shadow"?: Property.BoxShadow;
}

export const elevationMixin = (config: ElevationConfig): ElevationResult => {
  return {
    transition: `box-shadow ${config.transitionS.toFixed(2)}s`,
    "box-shadow": `${pxToRem(config.offsetX)} ${pxToRem(
      config.offsetY
    )} ${pxToRem(config.blurRadius)} ${config.color}`
  };
};
