import type { And, Not } from '../';

/**
 * Returns `true` if and only if `X` and `Y` are not both `true`; otherwise `false`.
 *
 * @example
 * ```ts
 * type T0 = Nand<false, true>;
 * //	^ = type T0 = true
 *
 * type T1 = Nand<true, true>;
 * //	^ = type T1 = false
 * ```
 */
export type Nand<X extends boolean, Y extends boolean> = Not<And<X, Y>>;
