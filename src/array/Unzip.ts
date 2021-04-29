import type { ExtendSelf, Push, Tuple } from '../';

type Populate<T extends readonly Tuple<unknown, 2>[], U extends [unknown[], unknown[]]> = T extends readonly [
	[infer X, infer Y],
	...infer R
]
	? R extends Tuple<unknown, 2>[]
		? Populate<R, [Push<U[0], [X]>, Push<U[1], [Y]>]>
		: never
	: U;

/**
 * Constructs a two-dimensional tuple type from each nested pair in `T`.
 *
 * @example
 * ```ts
 * type T0 = Unzip<[[1, 9], [2, 8], [3, 7]]>;
 * //	^ = type T0 = [[1, 2, 3], [9, 8, 7]]
 * ```
 */
export type Unzip<T extends readonly Tuple<unknown, 2>[]> = ExtendSelf<T, Populate<T, [[], []]>>;
