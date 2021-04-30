/**
 * Constructs an array type by excluding the last element in `T`.
 *
 * @example
 * ```ts
 * type T0 = Initial<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = [1, 2, 3, 4]
 * ```
 */
export type Initial<T extends readonly unknown[]> = T extends [...infer F, unknown] ? F : [];
