/**
 * Constructs a type by picking every element in tuple `T` except the first.
 *
 * @example
 * ```ts
 * type T0 = Tail<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = [2, 3, 4, 5]
 * ```
 */
export type Tail<T extends readonly unknown[]> = T extends readonly [unknown, ...infer R] ? R : [];
