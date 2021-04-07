import type { FixedTuple } from '../';

type Length<N extends number> = Partial<FixedTuple<unknown, N>>['length'];

/**
 * Constructs a union type of each number from `X` to `Y`.
 *
 * @example
 * ```ts
 * type T0 = Range<0, 10>;
 * //	^ = type T0 = 0 | 10 | 1 | 2 | 4 | 3 | 8 | 5 | 6 | 7 | 9
 * ```
 */
export type Range<X extends number, Y extends number> = Exclude<Length<Y>, Length<X>> | X;
