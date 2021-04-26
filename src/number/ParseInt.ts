import type { Flat, Tuple } from '../';

type DigitMapping = {
	'0': [];
	'1': [unknown];
	'2': [unknown, unknown];
	'3': Tuple<unknown, 3>;
	'4': Tuple<unknown, 4>;
	'5': Tuple<unknown, 5>;
	'6': Tuple<unknown, 6>;
	'7': Tuple<unknown, 7>;
	'8': Tuple<unknown, 8>;
	'9': Tuple<unknown, 9>;
};

type Transform<S extends string, U extends unknown[] = []> = S extends keyof DigitMapping
	? [...Flat<Tuple<U, 10>>, ...DigitMapping[S]]
	: S extends `${infer F}${infer R}`
	? F extends keyof DigitMapping
		? Transform<R, [...Flat<Tuple<U, 10>>, ...DigitMapping[F]]>
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
