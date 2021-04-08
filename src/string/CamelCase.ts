import type { Delimiter, Split } from '../';

type Inner<T, U> = T extends [`${infer F}`, ...infer R]
	? F extends undefined
		? ''
		: F extends ''
		? Inner<R, U>
		: `${U extends '' ? F : Capitalize<F>}${Inner<R, F>}`
	: '';

/**
 * Converts the first character in the string to a lowercase equivalent and each subsequent first
 * character of each word in the string to an uppercase equivalent.
 *
 * @example
 * ```ts
 * type T0 = CamelCase<'hello_world'>;
 * //	^ = type T0 = 'helloWorld'
 *
 * type T1 = CamelCase<'hello-world'>;
 * //	^ = type T1 = 'helloWorld'
 *
 * type T2 = CamelCase<'hello world'>;
 * //	^ = type T2 = 'helloWorld'
 * ```
 */
export type CamelCase<S extends string> = Split<S, Delimiter> extends [`${infer F}`, ...infer R]
	? Uncapitalize<`${F}${Inner<R, F>}`>
	: never;
