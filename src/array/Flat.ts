import type { Add } from '../';

type Concat<T extends unknown[], U extends unknown[], N extends number> = T['length'] extends N
	? U
	: Concat<T, T[N] extends unknown[] ? [...U, ...T[N]] : [...U, T[N]], Add<N, 1>>;

type Recurse<T extends unknown[], N extends number, U extends number> = U extends N
	? T
	: Recurse<Concat<T, [], 0>, N, Add<U, 1>>;

/**
 * Constructs an array type with all sub-arrays concatenated up to the specified depth.
 *
 * @example
 * ```ts
 * type T0 = Flat<[0, 1, [2, 3], 4]>;
 * //	^ = type T0 = [0, 1, 2, 3, 4]
 *
 * type T1 = Flat<[0, 1, 2, [3, [4, 5]]], 2>;
 * //	^ = type T1 = [0, 1, 2, 3, 4, 5]
 *
 * type T2 = Flat<[0, [[[1, [2]], [3, [4, [5]]], 6], [7, 8]]], 3>;
 * //	^ = type T2 = [0, 1, [2], 3, [4, [5]], 6, 7, 8]
 * ```
 */
export type Flat<T extends unknown[], N extends number = 1> = N extends 0 ? T : number extends N ? T : Recurse<T, N, 0>;
