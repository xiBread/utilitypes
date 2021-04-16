/**
 * Replaces the first occurance of `T` in `S` with `U`.
 *
 * @example
 * ```ts
 * type T0 = Replace<'I have 10 apples. I like apples', 'apples', 'oranges'>;
 * //	^ = type T0 = 'I have 10 oranges. I like apples'
 * ```
 */
export type Replace<S extends string, T extends string, U extends string> = S extends `${infer F}${T}${infer R}`
	? `${F}${U}${R}`
	: S;
