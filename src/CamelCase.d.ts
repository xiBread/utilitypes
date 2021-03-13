import type { SplitBy } from '../';
import type { Separators } from './__internal__';

type Inner<T extends unknown[], U> = T extends [`${infer F}`, ...infer R]
	? F extends undefined
		? ''
		: F extends ''
		? Inner<R, U>
		: `${U extends '' ? F : Capitalize<F>}${Inner<R, F>}`
	: '';

type Concat<T extends string[]> = T extends [`${infer F}`, ...infer R] ? Uncapitalize<`${F}${Inner<R, F>}`> : never;

/**
 * Converts the first character in the string to a lowercase equivalent and each subsequent first
 * character of each word in the string to an uppercase equivalent.
 */
export type CamelCase<S extends string> = Concat<SplitBy<S, Separators>>;
