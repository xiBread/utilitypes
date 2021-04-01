/**
 * Removes whitespace from both ends of a string.
 *
 * @example
 * ```ts
 * type T0 = Trim<'   Hello   '>;
 * //	^ = type T0 = 'Hello'
 * ```
 */
export type Trim<S extends string> = S extends ` ${infer T} ` ? Trim<T> : S;
