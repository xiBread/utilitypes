/* prettier-ignore */
type Specifier<T> =
	T extends 'a' ? any :
	T extends 'b' ? bigint :
	T extends 'd' ? number :
	T extends 'i' ? number :
	T extends 'u' ? number :
	T extends 'o' ? number :
	T extends 'x' ? number :
	T extends 'f' ? number :
	T extends 'e' ? number :
	T extends 'c' ? string :
	T extends 's' ? string : never

/**
 * Constructs a tuple type based on each specifier found in `S`.
 *
 * @example
 * ```ts
 * type T0 = Printf<'%i + %i = %i'>
 * //	^ = [number, number, number]
 * ```
 */
export type Printf<S extends string> = S extends `${infer F}%${infer T}${infer R}`
	? [Specifier<T>, ...Printf<R>]
	: S extends `${infer F}%${infer T}`
	? [Specifier<T>]
	: [];
