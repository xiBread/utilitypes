/**
 * Replaces the first occurance of `T` in `S` with `U`.
 */
export type Replace<S extends string, T extends string, U extends string> = S extends `${infer F}${T}${infer R}`
	? `${F}${U}${R}`
	: S;
