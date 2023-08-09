type $<T, N = 1, U extends 0[] = []> = U["length"] extends N
	? T
	: T extends [infer F, ...infer R]
	? F extends unknown[]
		? [...$<F, N, [0, ...U]>, ...$<R, N, U>]
		: [F, ...$<R, N, U>]
	: T;

/**
 * @remarks Use `number` for infinite depth.
 *
 * @example Default depth of 1
 * ```ts
 * in:
 * type T = Flat<[1, 2, [3, 4]]>;
 *
 * out:
 * type T = [1, 2, 3, 4];
 * ```
 *
 * @example Specify depth
 * ```ts
 * in:
 * type T = Flat<[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2>;
 *
 * out:
 * type T = [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]];
 * ```
 *
 * @example Infinite depth
 * ```ts
 * in:
 * type T = Flat<[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]], number>;
 *
 * out:
 * type T = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * ```
 */
export type Flat<T extends unknown[], N extends number = 1> = $<T, number extends N ? 99 : N>;
