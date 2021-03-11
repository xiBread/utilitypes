/* prettier-ignore */
type Token<T> =
	'a' extends T ? any :
	's' extends T ? string :
	'd' extends T ? number :
	'i' extends T ? number :
	'f' extends T ? number :
	'b' extends T ? bigint :
	'o' extends T ? object : never;

export type Printf<T> = T extends `${infer U}%${infer F}${infer R}`
	? [Token<F>, ...Printf<R>]
	: T extends `${infer U}%${infer F}`
	? [Token<F>]
	: [];
