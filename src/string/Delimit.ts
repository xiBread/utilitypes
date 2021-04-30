import type { Delimiter, UppercaseCharacter } from '../';

type Split<S extends string, U extends string> = S extends ''
	? []
	: S extends `${infer F}${U}${infer R}`
	? S extends `${F}${infer T}${R}`
		? T extends U
			? S extends `${infer F}${T}${infer R}`
				? [...Split<F, U>, T, ...Split<R, U>]
				: never
			: never
		: never
	: [S];

type Join<T extends unknown[], U extends string> = T extends [`${infer F}`, ...infer R]
	? `${F extends Delimiter ? U : F extends UppercaseCharacter ? `${U}${Lowercase<F>}` : F}${Join<R, U>}`
	: '';

/**
 * Converts each space and compound word in `S` by replacing them with `U`.
 *
 * @example
 * ```ts
 * type T0 = Delimit<'someLongWord'>;
 * //	^ = type T0 = 'some-long-word'
 *
 * type T1 = Delimit<'hello world', '_'>;
 * //	^ = type T1 = 'hello_world'
 * ```
 */
export type Delimit<S extends string, U extends string = '-'> = string extends U
	? S
	: Join<Split<S, Delimiter | UppercaseCharacter>, U>;
