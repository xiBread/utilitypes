import type { BitAnd, BitNot, BitOr } from '../';

/**
 * Constructs a type with a `1` in each bit position for which the corresponding bits of either but
 * not both `X` and `Y` are `1`.
 *
 * @example
 * ```ts
 * type T0 = BitXor<'0101', '0011'>;
 * //	^ = type T0 = "0110"
 * ```
 */
export type BitXor<X, Y> = BitOr<BitAnd<X, BitNot<Y>>, BitAnd<BitNot<X>, Y>>;
