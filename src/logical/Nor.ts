import type { NOT, OR } from '../';

/**
 * Returns `true` if and only if `A` and `B` are `false`; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = NOR<false, true>;
 * //	^ = type T0 = false
 *
 * type T1 = NOR<false, false>
 * //	^ type T1 = true
 * ```
 */
export type NOR<A extends boolean, B extends boolean> = NOT<OR<A, B>>;
