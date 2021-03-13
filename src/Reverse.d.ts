/**
 * Constructs a type by reversing the order of each element in `T`.
 */
export type Reverse<T extends unknown[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];
