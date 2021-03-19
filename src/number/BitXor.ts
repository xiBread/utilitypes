import { BitAnd } from './BitAnd';
import { BitOr } from './BitOr';

export type BitXor<X, Y> = BitOr<BitAnd<X, BitNot<Y>>, BitAnd<BitNot<X>, Y>>;
