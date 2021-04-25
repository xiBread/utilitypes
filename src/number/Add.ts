import type { FixedTuple } from '../';

export type Add<X extends number, Y extends number> = [...FixedTuple<unknown, X>, ...FixedTuple<unknown, Y>]['length'] &
	number;
