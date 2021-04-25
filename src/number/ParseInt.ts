import type { FixedTuple, Flat } from '../';

type DigitMapping = {
	'0': [];
	'1': [unknown];
	'2': [unknown, unknown];
	'3': FixedTuple<unknown, 3>;
	'4': FixedTuple<unknown, 4>;
	'5': FixedTuple<unknown, 5>;
	'6': FixedTuple<unknown, 6>;
	'7': FixedTuple<unknown, 7>;
	'8': FixedTuple<unknown, 8>;
	'9': FixedTuple<unknown, 9>;
};

type Transform<S extends string, U extends unknown[] = []> = S extends keyof DigitMapping
	? [...Flat<FixedTuple<U, 10>>, ...DigitMapping[S]]
	: S extends `${infer F}${infer R}`
	? F extends keyof DigitMapping
		? Transform<R, [...Flat<FixedTuple<U, 10>>, ...DigitMapping[F]]>
		: never
	: never;

/**
 * Returns the base 10 value of `S`.
 */
export type ParseInt<S extends `${number}`> = Transform<S> extends infer T
	? T extends unknown[]
		? T['length']
		: undefined
	: never;
