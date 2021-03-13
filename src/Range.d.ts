import type { TupleOf } from '../';

type TupleLike<N extends number> = Partial<TupleOf<unknown, N>>['length'];

/**
 * Constructs a tuple type of each number from `X` to `Y`.
 */
export type Range<X extends number, Y extends number> = Exclude<TupleLike<X>, TupleLike<Y>> | Y;
