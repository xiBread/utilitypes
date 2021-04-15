import type { FixedTuple, Join, Slice, Split } from '../';

export type PadStart<S extends string, N extends number, T extends string = ' '> = Join<
	[...Slice<FixedTuple<T, N>, Split<S, ''>['length']>, S],
	''
>;
