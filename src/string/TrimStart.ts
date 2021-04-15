import type { Whitespace } from '../aliases';

/**
 * Removes whitespace from the start of a string.
 *
 * @example
 * ```ts
 * type T0 = TrimStart<'   Hello   '>;
 * //	^ = type T0 = 'Hello   '
 * ```
 */
export type TrimStart<S extends string> = S extends `${Whitespace}${infer T}` ? TrimStart<T> : S;
