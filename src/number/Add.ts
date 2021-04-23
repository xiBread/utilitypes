import type { CastAs, FixedTuple } from '../';

export type Add<X extends number, Y extends number> = CastAs<
	[...FixedTuple<unknown, X>, ...FixedTuple<unknown, Y>]['length'],
	number
>;
