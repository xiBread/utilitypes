import type { AND, NOT } from '../';

/**
 * Returns `true` if and only if `A` and `B` are not both `true`; otherwise `false`.
 *
 * @example
 * ```ts
 * type T0 = NAND<false, true>;
 * //	^ = type T0 = true
 *
 * type T1 = NAND<true, true>;
 * //	^ = type T1 = false
 * ```
 */
export type NAND<A extends boolean, B extends boolean> = NOT<AND<A, B>>;
