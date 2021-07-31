import type { ExtendSelf } from '../internal';

type Or<X, Y> = [X, Y] extends ['0', '0']
	? '0'
	: [X, Y] extends ['0', '1'] | ['1', '0'] | ['1', '1']
	? '1'
	: [X, Y] extends [`${infer A}${infer T}`, `${infer B}${infer U}`]
	? [A, B] extends ['0' | '1', '0' | '1']
		? `${Or<A, B>}${Or<T, U>}`
		: never
	: never;

/**
 * Constructs a type with a `1` in each bit position for which the corresponding bits of either or
 * both `X` and `Y` are `1`.
 *
 * @example
 * ```ts
 * type T0 = BitOr<'0101', '0001'>;
 * //	^ = type T0 = "0111"
 * ```
 */
export type BitOr<X, Y> = ExtendSelf<X, Or<X, Y>>;
