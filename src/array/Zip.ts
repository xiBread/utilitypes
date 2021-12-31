/**
 * Constructs an array type whose elements are tuples containing a pair of elements from `T`
 * occuring at the same index.
 *
 * @example
 * ```ts
 * type T0 = Zip<[1, 2, 3], ['a', 'b', 'c']>;
 * //	^ = type T0 = [[1, "a"], [2, "b"], [3, "c"]]
 *
 * type T1 = Zip<[1, 2, 3, 4, 5], [9, 8]>;
 * //	^ = type T1 = [[1, 9], [2, 8]]
 * ```
 */
export type Zip<A extends readonly unknown[], B extends readonly unknown[]> = A extends readonly [infer A1, ...infer A2]
	? B extends readonly [infer B1, ...infer B2]
		? [[A1, B1], ...Zip<A2, B2>]
		: []
	: [];
