import type { ExtendSelf } from '../';

type And<X, Y> = [X, Y] extends ['0', '0'] | ['0', '1'] | ['1', '0']
	? '0'
	: [X, Y] extends ['1', '1']
	? '1'
	: [X, Y] extends [`${infer A}${infer T}`, `${infer B}${infer U}`]
	? [A, B] extends ['0' | '1', '0' | '1']
		? `${And<A, B>}${And<T, U>}`
		: never
	: never;

/**
 * Constructs a type with a `1` in each bit position for which the corresponding bits of both
 * `X` and `Y` are `1`.
 *
 * @example
 * ```ts
 * type T0 = BitAnd<'0101', '0011'>;
 * //	^ = type T0 = '0001'
 * ```
 */
export type BitAnd<X, Y> = ExtendSelf<X, And<X, Y>>;
