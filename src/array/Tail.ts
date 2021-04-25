/**
 * Constructs a type by picking every element in tuple `T` except the first.
 *
 * @example
 * ```ts
 * type T0 = Tail<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = [2, 3, 4, 5]
 * ```
 */
export type Tail<T extends unknown[]> = T extends [infer F, ...infer R] ? R : [];
