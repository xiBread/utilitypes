import type { NOT, XOR } from '../';

/**
 * Returns `true` if and only if `A` and `B` are both either `false` or `true`.
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
export type XNOT<A extends boolean, B extends boolean> = NOT<XOR<A, B>>;
