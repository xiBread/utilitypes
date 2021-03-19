/**
 * Constructs a tuple type, including `U`, by splitting `S` by `U`.
 */
export type Split<S extends string, U extends string> = S extends ''
	? []
	: S extends `${infer F}${U}${infer R}`
	? S extends `${F}${infer D}${R}`
		? D extends U
			? S extends `${infer F}${D}${infer R}`
				? [...Split<F, U>, D, ...Split<R, U>]
				: never
			: never
		: never
	: [S];
