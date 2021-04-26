/**
 * Extracts the first element from `T`.
 *
 * @example
 * ```ts
 * type T0 = Shift<[1, 2, 3]>;
 * //	^ = type T0 = 1
 * ```
 */
export type Shift<T extends readonly unknown[]> = T extends readonly [infer U, ...unknown[]] ? U : never;
