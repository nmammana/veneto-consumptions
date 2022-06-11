import { ReactElement as _ReactElement, ReactNode } from "react";

// TODO: Ver si se puede hacer funcionar este tipado

export type Children = ReactNode;
export type ReactElement = _ReactElement;
export type PropsWithChildren<P> = P & { children?: Children };
export type FC<P = unknown> = (props: P) => ReactElement | null;
export type FCC<P = unknown> = FC<PropsWithChildren<P>>;

export type Optional<T> = T | undefined;

export interface User {
  email: string;
  password: string;
}

export enum TableType {
  Stays = "Stays",
  Products = "Products"
}
