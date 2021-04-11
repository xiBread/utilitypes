export type Shift<T extends unknown[]> = T extends [infer U, ...infer R] ? U : never;
