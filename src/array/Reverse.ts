/**
 * Constructs an array type by reversing the order of each element in `T`.
 *
 * @example
 * ```ts
 * type T0 = Reverse<[1, 2, 3]>;
 * //	^ = type T0 = [3, 2, 1]
 * ```
 */
export type Reverse<T extends readonly unknown[]> = T extends readonly [infer F, ...infer R] ? [...Reverse<R>, F] : [];
