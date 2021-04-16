import type { LiteralPrimitive } from '../';

type Concat<T extends unknown[], S extends string, H extends LiteralPrimitive = ''> = T extends [infer F, ...infer R]
	? F extends LiteralPrimitive
		? `${H}${Concat<R, S, R extends [] ? F : `${F}${S}`>}`
		: never
	: H;

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
export type Join<T extends unknown[], S extends string = ','> = Concat<T, S> extends infer U ? U : never;
