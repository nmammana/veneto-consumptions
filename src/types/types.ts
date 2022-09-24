import { SvgIconProps } from "@material-ui/core";
import { DateTime } from "luxon";
import { ReactElement as _ReactElement, ReactNode } from "react";

// TODO: Ver si se puede hacer funcionar este tipado
export type Children = ReactNode;
export type ReactElement = _ReactElement;
export type PropsWithChildren<P> = P & { children?: Children };
export type FC<P = unknown> = (props: P) => ReactElement | null;
export type FCC<P = unknown> = FC<PropsWithChildren<P>>;

export type Optional<T> = T | undefined;
export const notUndefined = <T>(x: Optional<T>): x is T => x !== undefined;

export type ApiDate = string;
export type DateInput = DateTime | ApiDate;
export type Url = string;
export type IconC = FC<SvgIconProps>;

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

export enum SizeVariant {
  ExtraSmall = "ExtraSmall",
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
}

export interface Apartment {
  id: number;
  tower: number;
  wing: number;
  floor: number;
  letter: string;
  name: string;
}

export enum TypeOfBenefit {
  Breakfast = 1, // 'Desayuno'
  Lunch = 2, // 'Almuerzo'
  Snack = 3, // 'Merienda'
  Dinner = 4, // 'Cena'
  Spa = 5, // 'Spa'
  Store = 6 // 'Kiosco'
}

export interface BenefitName {
  name: string;
  typeOfBenefit: TypeOfBenefit;
}

export interface Item {
  id?: number;
  type_of_benefit?: number;
  name: string;
  price: number;
}
export interface ProductTableItem {
  id?: number;
  typeOfBenefit?: string;
  name: string;
  price: number;
  actionItems?: ReactElement;
}

export interface Person {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  document?: string;
  role?: number;
}

export interface Benefit {
  type_of_benefit: TypeOfBenefit;
  quantity: number;
  quantity_available?: number;
}

export interface User {
  id?: number;
  user: Person;
  qr_code?: string;
  benefits?: Benefit[];
}

export interface Stay {
  id?: number;
  start_date?: string;
  end_date?: string;
  apartment?: number;
  users: User[];
}

export interface PlainBenefit {
  [key: string]: number;
}

export interface StayInputs {
  id?: number;
  startDate?: string;
  endDate?: string;
  apartment?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  identityNumber?: string;
  qrCode?: string;
  benefits?: PlainBenefit[];
}

export interface StaySearchParams {
  apartment?: number;
  start_date?: string;
  end_date?: string;
}

interface ConsumptionItem {
  item: Item;
  item_id: number;
  total: number;
  quantity: number;
  frees: number;
}

export interface Consumption {
  items: ConsumptionItem[];
  id?: number;
  extra_price?: number;
  total?: number;
  signature?: Url;
  user_stay: User;
  stay?: number;
  payed?: boolean;
  user_stay_id: number;
  added: string;
}

export interface ConsumptionTableItem {
  id: number;
  date: string;
  userName: string;
  itemConsumptionList: string[];
  extraPrice?: string;
  signature?: Url;
  payed?: boolean;
  consumptionTotal: string;
}

export interface BenefitStatistics {
  name: string;
  frees: number;
  quantity: number;
}
export interface Totals {
  amount?: number;
  total?: number;
  types: BenefitStatistics[];
}

export enum TypeVariant {
  Contained = "Contained",
  Outlined = "Outlined",
  Text = "Text"
}
