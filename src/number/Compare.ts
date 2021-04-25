import type { Absolute, IsNegative } from '../';

type Iterate<X extends number, Y extends number, T extends unknown[] = []> = T['length'] extends Absolute<Y>
	? false
	: T['length'] extends Absolute<X>
	? true
	: Iterate<X, Y, [...T, unknown]>;

type LessThan<X extends number, Y extends number> = X extends Y ? false : Iterate<X, Y>;

type Lowest<
	X extends number,
	Y extends number,
	T extends [boolean, boolean] = [IsNegative<X>, IsNegative<Y>]
> = T extends [true, true]
	? LessThan<X, Y> extends true
		? false
		: true
	: T extends [true, false]
	? true
	: T[1] extends true
	? false
	: LessThan<X, Y>;

export type Compare<X extends number, Y extends number> = X extends Y ? 0 : Lowest<X, Y> extends true ? -1 : 1;
