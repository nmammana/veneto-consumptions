export type DeepRequired<T> = T extends object
  ? {
      [P in keyof T]-?: NonNullable<DeepRequired<T[P]>>;
    }
  : T;
