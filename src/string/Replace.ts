import type { CastAs } from '../';

/**
 * Replaces all occurances of `T` in `S` with `U`.
 */
export type Replace<S extends string, T extends string, U extends string> = S extends `${infer F}${T}${infer R}`
	? Replace<`${F}${U}${R}`, T, U>
	: S extends infer T
	? CastAs<T, string>
	: never;
