/**
 * Replaces all occurances of `T` in `S` with `U`.
 */
export type ReplaceAll<S extends string, T extends string, U extends string> = S extends `${infer F}${T}${infer R}`
	? ReplaceAll<`${F}${U}${R}`, T, U>
	: S;
