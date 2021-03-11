import type { SplitBy } from '../';
import type { Separators } from './__internal__';

type Inner<T extends unknown[], U> = T extends [`${infer F}`, ...infer R]
	? F extends undefined
		? ''
		: F extends ''
		? Inner<R, U>
		: `${U extends '' ? F : Capitalize<F>}${Inner<R, F>}`
	: '';

type Concat<T extends string[]> = T extends [`${infer F}`, ...infer R]
	? Uncapitalize<`${F}${Inner<R, F>}`>
	: never;

export type CamelCase<S extends string> = Concat<SplitBy<S, Separators>>;
