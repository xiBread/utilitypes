/**
 * Constructs a type by picking the first element in tuple `T`.
 *
 * @example
 * ```ts
 * type T0 = Head<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = 1
 * ```
 */
export type Head<T extends unknown[]> = T extends [infer U] ? U : T extends [...infer F, infer R] ? Head<F> : never;
