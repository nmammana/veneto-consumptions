import { ReactElement as _ReactElement, ReactNode } from "react";

// TODO: Ver si se puede hacer funcionar este tipado

export type Children = ReactNode;
export type ReactElement = _ReactElement;
export type PropsWithChildren<P> = P & { children?: Children };
export type FC<P = unknown> = (props: P) => ReactElement | null;
export type FCC<P = unknown> = FC<PropsWithChildren<P>>;

export type Optional<T> = T | undefined;
export const notUndefined = <T>(x: Optional<T>): x is T => x !== undefined;

export interface UserAuth {
  email: string;
  password: string;
}

export enum TableType {
  Stays = "Stays",
  Products = "Products"
}

export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
  Reset = "reset"
}

export interface Apartment {
  id: number;
  tower: number;
  wing: number;
  floor: number;
  letter: string;
  name: string;
}

export enum TypeOfBenefict {
  Breakfast = 1, // 'Desayuno'
  Lunch = 2, // 'Almuerzo'
  Snack = 3, // 'Merienda'
  Dinner = 4, // 'Cena'
  Spa = 5, // 'Spa'
  Store = 6 // 'Kiosko'
}

export interface BenefictName {
  name: string;
  typeOfBenefict: TypeOfBenefict;
}

export interface Item {
  id?: number;
  type_of_benefit?: number;
  name: string;
  price: number;
}
export interface ProductTableItem {
  id?: number;
  typeOfBenefict?: string;
  name: string;
  price: number;
  actionItems?: ReactElement;
}

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  identityNumber?: string;
  role?: number;
}

export interface Benefict {
  typeOfBenefict: TypeOfBenefict;
  quantity: number;
  quantityAvailable: number;
}

export interface User {
  id: number;
  user: Person;
  qrCode: string;
  beneficts: Benefict[];
}

export interface Stay {
  id?: number;
  start_date?: string;
  end_date?: string;
  apartment?: number;
  users?: User[];
}

export interface StayTableItem {
  id: number;
  apartmentName?: string;
  startDate?: string;
  endDate?: string;
  guestsNumber?: number;
}
