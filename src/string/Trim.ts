import type { ExtendSelf, TrimEnd, TrimStart } from '../';

/**
 * Removes whitespace from both ends of a string.
 *
 * @example
 * ```ts
 * type T0 = Trim<'   Hello   '>;
 * //	^ = type T0 = 'Hello'
 * ```
 */
export type Trim<S extends string> = ExtendSelf<S, TrimStart<TrimEnd<S>>>;
