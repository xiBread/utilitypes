import type { FixedTuple, Initial } from '../';

type Decrement<N extends number> = N extends 0 ? N : Initial<FixedTuple<unknown, N>>['length'];

export type GreaterThan<X extends number, Y extends number> = X extends Y
	? false
	: Y extends 0
	? true
	: X extends 0
	? false
	: GreaterThan<Decrement<X>, Decrement<Y>>;
