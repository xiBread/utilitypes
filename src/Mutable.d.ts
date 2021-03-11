export type Mutable<T extends object> = { -readonly [K in keyof T]: T[K] };
