/* prettier-ignore */
type Token<T> =
	'a' extends T ? any :
	's' extends T ? string :
	'd' extends T ? number :
	'i' extends T ? number :
	'f' extends T ? number :
	'b' extends T ? bigint :
	'o' extends T ? object : never;

/**
 * Constructs a tuple type based on each print token found in `S`.
 */
export type Printf<S extends string> = S extends `${infer T}%${infer F}${infer R}`
	? [Token<F>, ...Printf<R>]
	: S extends `${infer T}%${infer F}`
	? [Token<F>]
	: [];
