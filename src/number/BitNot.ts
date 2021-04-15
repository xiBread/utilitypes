/**
 * Constructs a type by inverting the bits of `N`.
 *
 * @example
 * ```ts
 * type T0 = BitNot<'0000000000000101'>;
 * //	^ = type T0 = '1111111111111010'
 */
export type BitNot<N> = N extends '0'
	? '1'
	: N extends '1'
	? '0'
	: N extends `${infer T}${infer U}`
	? T extends '0' | '1'
		? `${BitNot<T>}${BitNot<U>}`
		: never
	: never;
