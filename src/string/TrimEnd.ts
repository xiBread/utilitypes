/**
 * Removes whitespace from the end of a string.
 *
 * @example
 * ```ts
 * type T0 = TrimEnd<'   Hello   '>;
 * //	^ = type T0 = '   Hello'
 * ```
 */
export type TrimEnd<S extends string> = S extends `${infer T} ` ? TrimEnd<T> : S;
