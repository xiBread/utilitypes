import type { Tuple } from '../';
import type { Indexable } from '../internal';

type Split<
	S extends string,
	T extends unknown[] = []
> = S extends `${infer $0}${infer $1}${infer $2}${infer $3}${infer $4}${infer $5}${infer $6}${infer $7}${infer $8}${infer $9}${infer R}`
	? Split<R, [...Tuple<unknown, 10>, ...T]>
	: S extends `${infer $0}${infer R}`
	? Split<R, [unknown, ...T]>
	: T;

/**
 * Returns the length of `T`.
 *
 * @example
 * ```ts
 * type T0 = Length<'Lorem ipsum'>;
 * //	^ = type T0 = 11
 *
 * type T1 = Length<[1, 2, 3, 4, 5]>;
 * //	^ = type T1 = 5
 * ```
 */
export type Length<T extends Indexable> = T extends string ? Split<T>['length'] : T['length'];
