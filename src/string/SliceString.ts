import type { Join, Length, Slice, Split } from '../';

export type SliceString<S extends string, X extends number, Y extends number = Length<S>> = Join<
	Slice<Split<S, ''>, X, Y>,
	''
>;
