/**
 * Constructs a type by picking every element in tuple `T` except the last.
 *
 * @example
 * ```ts
 * type T0 = Initial<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = [1, 2, 3, 4]
 * ```
 */
export type Initial<T extends unknown[]> = T extends [...infer F, infer R] ? F : [];
