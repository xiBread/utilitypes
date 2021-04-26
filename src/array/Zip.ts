import type { ExtendSelf, Push } from '../';

type Populate<T extends readonly [unknown[], unknown[]], U extends unknown[]> = T extends readonly [
	[infer A, ...infer B],
	[infer X, ...infer Y]
]
	? Populate<[B, Y], Push<U, [[A, X]]>>
	: U;

/**
 * Constructs a nested tuple type, each containing a pair of elements from `T` occuring at the same
 * index.
 *
 * @example
 * ```ts
 * type T0 = Zip<[[1, 2, 3], ['a', 'b', 'c']]>;
 * //	^ = type T0 = [[1, "a"], [2, "b"], [3, "c"]]
 *
 * type T1 = Zip<[[1, 2, 3, 4, 5], [9, 8]]>;
 * //	^ = type T1 = [[1, 9], [2, 8]]
 * ```
 */
export type Zip<T extends readonly [unknown[], unknown[]]> = ExtendSelf<T, Populate<T, []>>;
