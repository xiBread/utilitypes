import type { Slice } from '../';

type Separate<T extends readonly unknown[], N extends number, U extends unknown[] = []> = T extends []
	? U
	: Slice<T, 0, N> extends infer R
	? R extends unknown[]
		? Separate<Slice<T, N>, N, [...U, R]>
		: never
	: never;

/**
 * Constructs an array of tuples from `T` where each tuple has a length of `N`.
 *
 * @example
 * ```ts
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
 *
 * type T0 = Chunk<typeof numbers, 3>;
 * //	^ = type T0 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 *
 * type T1 = Chunk<typeof numbers, 2>;
 * //	^ = type T1 = [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
 */
export type Chunk<T extends readonly unknown[], N extends number> = Separate<T, N>;
