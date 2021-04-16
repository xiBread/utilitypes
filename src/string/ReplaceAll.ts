/**
 * Replaces all occurances of `T` in `S` with `U`.
 *
 * @example
 * ```ts
 * type T0 = ReplaceAll<'I have 10 apples. I like apples.', 'apples', 'oranges'>;
 * //	^ = type T0 = 'I have 10 oranges. I like oranges.'
 * ```
 */
export type ReplaceAll<S extends string, T extends string, U extends string> = S extends `${infer F}${T}${infer R}`
	? ReplaceAll<`${F}${U}${R}`, T, U>
	: S;
