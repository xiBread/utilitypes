import type { Join, Length, Slice, Split } from '../';

/**
 * Returns a section of `S` from `X` to but not including `Y`.
 */
export type SliceString<S extends string, X extends number, Y extends number = Length<S>> = Join<
	Slice<Split<S, ''>, X, Y>,
	''
>;
