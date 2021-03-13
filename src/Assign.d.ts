type Mapped<T> = { [K in keyof T]: T[K] };

/**
 * Constructs a type with each property in `U` assigned to `T`
 */
export type Assign<T, U> = Mapped<Omit<T, Extract<keyof T, keyof U>>> & U;
