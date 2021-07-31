import type { TrimEnd, TrimStart } from '../';
import type { ExtendSelf } from '../internal';

/**
 * Removes whitespace from both ends of `S`.
 *
 * @example
 * ```ts
 * type T0 = Trim<'   Hello   '>;
 * //	^ = type T0 = 'Hello'
 * ```
 */
export type Trim<S extends string> = ExtendSelf<S, TrimStart<TrimEnd<S>>>;
