import type { BitAnd, BitNot, BitOr } from '../';

export type BitXor<X, Y> = BitOr<BitAnd<X, BitNot<Y>>, BitAnd<BitNot<X>, Y>>;
