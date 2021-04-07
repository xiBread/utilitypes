export type Compact<T> = T extends unknown ? { [K in keyof T]: Compact<T[K]> } : T;
