/**
 * Returns `false` if `T` is `true`; otherwise, `true`.
 *
 * @example
 * ```ts
 * type T0 = Not<false>;
 * //	^ = type T0 = true
 *
 * type T1 = Not<true>;
 * //	^ = type T1 = false
 * ```
 */
export type Not<T extends boolean> = T extends true ? false : true;
