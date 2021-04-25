import type { Add } from '../';

type Concat<T extends unknown[], U extends unknown[], N extends number> = T['length'] extends N
	? U
	: Concat<T, T[N] extends unknown[] ? [...U, ...T[N]] : [...U, T[N]], Add<N, 1>>;

type Recurse<T extends unknown[], N extends number, U extends number = 0> = U extends N
	? T
	: Recurse<Concat<T, [], 0>, N, Add<U, 1>>;

type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
	? F extends unknown[]
		? [...Flatten<F>, ...Flatten<R>]
		: [F, ...Flatten<R>]
	: [];

/**
 * Constructs an array type with all sub-arrays concatenated up to the specified depth.
 *
 * @example
 * ```ts
 * type T0 = Flat<[0, 1, [2, 3], 4]>;
 * //	^ = type T0 = [0, 1, 2, 3, 4]
 *
 * type T1 = Flat<[0, 1, 2, [3, [4, 5]]], void>;
 * //	^ = type T1 = [0, 1, 2, 3, 4, 5]
 *
 * type T2 = Flat<[0, [[[1, [2]], [3, [4, [5]]], 6], [7, 8]]], 3>;
 * //	^ = type T2 = [0, 1, [2], 3, [4, [5]], 6, 7, 8]
 * ```
 */
export type Flat<T extends unknown[], N extends void | number = 1> = N extends void
	? Flatten<T>
	: N extends number
	? N extends 0
		? T
		: number extends N
		? T
		: Recurse<T, N>
	: [];
