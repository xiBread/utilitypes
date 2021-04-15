import type { FixedTuple, Join, Slice, Split } from '../';

export type PadEnd<S extends string, N extends number, T extends string = ' '> = Join<
	[S, ...Slice<FixedTuple<T, N>, Split<S, ''>['length']>],
	''
>;
