import type { TupleOf } from '../';

type TupleLike<N extends number> = Partial<TupleOf<unknown, N>>['length'];

export type Range<X extends number, Y extends number> = Exclude<TupleLike<X>, TupleLike<Y>> | Y;
