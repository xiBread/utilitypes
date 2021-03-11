type Mapped<T> = { [K in keyof T]: T[K] };

export type Merge<T, U> = Mapped<Omit<T, Extract<keyof T, keyof U>>> & U;
