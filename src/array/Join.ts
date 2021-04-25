import type { LiteralPrimitive, Tail } from '../';

/**
 * Joins each element in `T` separated by `S`.
 *
 * @example
 * ```ts
 * type T0 = Join<['foo', 'bar', 'baz']>;
 * //	^ = type T0 = "foo,bar,baz"
 *
 * type T1 = Join<['some', 'long', 'word'], '-'>;
 * //	^ = type T1 = "some-long-word"
 * ```
 */
export type Join<T extends unknown[], S extends string = ','> = T extends []
	? ''
	: T extends [infer U]
	? U
	: T[0] extends LiteralPrimitive
	? `${T[0]}${S}${Join<Tail<T>, S>}`
	: never;
