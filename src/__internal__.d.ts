export type Values<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];

export type ExtendSelf<T, U> = T extends T ? U : never;

export type Separators = '-' | '_' | ' ';
