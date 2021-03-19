import type { CastAs } from '../';

/**
 * Replaces all occurances of `U` in `S` with `V`.
 */
export type Replace<S extends string, U extends string, V extends string> = S extends `${infer F}${U}${infer R}`
	? Replace<`${F}${V}${R}`, U, V>
	: S extends infer T
	? CastAs<T, string>
	: never;
