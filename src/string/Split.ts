/**
 * Constructs a tuple type, including `U`, by splitting `S` by `U`.
 *
 * @example
 * ```ts
 * type T0 = Split<'aaa7bbb7ccc', '7'>;
 * //	^ = type T0 = ["aaa", "7", "bbb", "7", "ccc"]
 * ```
 */
export type Split<S extends string, U extends string> = S extends `${infer F}${U}${infer R}`
	? [...Split<F, U>, U, ...Split<R, U>]
	: [S];
