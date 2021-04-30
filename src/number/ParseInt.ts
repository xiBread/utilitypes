import type { Add, Flat, RecordOf, Tuple } from '../';

type Digit<N extends number = 0, T extends unknown[] = []> = N extends 10
	? RecordOf<T>
	: Digit<Add<N, 1>, [...T, Tuple<unknown, N>]>;

type Transform<S extends string, U extends unknown[] = []> = S extends keyof Digit
	? [...Flat<Tuple<U, 10>>, ...Digit[S]]
	: S extends `${infer F}${infer R}`
	? F extends keyof Digit
		? Transform<R, [...Flat<Tuple<U, 10>>, ...Digit[F]]>
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
