import React, { NamedExoticComponent } from "react";
import equal from "react-fast-compare";

export const withMemo = <T extends object>(
  component: React.FC<T>
): NamedExoticComponent<T> =>
  React.memo(component, (prevProps, nextProps) => equal(prevProps, nextProps));
