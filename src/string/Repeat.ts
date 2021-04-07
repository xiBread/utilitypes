import type { FixedTuple, Join } from '../';

/**
 * Constructs a string from `S` containing `N` copies concatenated together.
 *
 * @example
 * ```ts
 * type T0 = Repeat<'Hi', 5>;
 * //	^ = type T0 = 'HiHiHiHiHi'
 * ```
 */
export type Repeat<S extends string, N extends number> = Join<FixedTuple<S, N>, ''>;
