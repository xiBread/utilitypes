/**
 * Constructs an array type by excluding the first element in `T`.
 *
 * @example
 * ```ts
 * type T0 = Tail<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = [2, 3, 4, 5]
 * ```
 */
export type Tail<T extends readonly unknown[]> = T extends readonly [unknown, ...infer R] ? R : [];
