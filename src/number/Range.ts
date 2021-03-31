import type { FixedTuple } from '../';

type Length<N extends number> = Partial<FixedTuple<unknown, N>>['length'];

/**
 * Constructs a union type of each number from `X` to `Y`.
 */
export type Range<X extends number, Y extends number> = Exclude<Length<Y>, Length<X>> | X;
