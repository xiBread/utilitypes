export type ExtendSelf<T, U> = T extends T ? U : never;

export type Indexable = string | readonly unknown[];
