/**
 * Returns `false` if `T` is `true`; otherwise, `true`.
 *
 * @example
 * ```ts
 * type T0 = NOT<false>;
 * //	^ = type T0 = true
 *
 * type T1 = NOT<true>;
 * //	^ = type T1 = false
 * ```
 */
export type NOT<T extends boolean> = T extends true ? false : true;
