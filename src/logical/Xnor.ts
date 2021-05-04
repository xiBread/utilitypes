import type { Not, Xor } from '../';

/**
 * Returns `true` if and only if `X` and `Y` are both either `false` or `true`.
 *
 * @example
 * ```ts
 * type T0 = Xnor<false, true>;
 * //	^ = type T0 = false
 *
 * type T1 = Xnor<true, true>;
 * //	^ = type T1 = true
 * ```
 */
export type Xnor<X extends boolean, Y extends boolean> = Not<Xor<X, Y>>;
