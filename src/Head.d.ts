/**
 * Constructs a type by picking the first element in tuple `T`.
 */
export type Head<T extends unknown[]> = T extends [infer U] ? U : T extends [...infer F, infer R] ? Head<F> : never;
