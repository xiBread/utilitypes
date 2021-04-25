/**
 * Constructs a type by picking the last element in tuple `T`.
 *
 * @example
 * ```ts
 * type T0 = Last<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = 5
 * ```
 */
export type Last<T extends unknown[]> = T extends [...infer F, infer R] ? R : [];
