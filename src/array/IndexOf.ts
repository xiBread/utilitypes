import type { Add } from '../';

/**
 * Returns the first index of `U` in `T` or `-1` if it's not present.
 *
 * @example
 * ```ts
 * const colors = ['green', 'red', 'blue', 'yellow', 'red', 'pink'] as const;
 *
 * type T0 = IndexOf<typeof colors, 'red'>;
 * //	^ = type T0 = 1
 *
 * type T1 = IndexOf<typeof colors, 'red', 3>;
 * //	^ = type T1 = 4
 *
 * type T2 = IndexOf<typeof colors, 'orange'>;
 * //	^ = type T2 = -1
 * ```
 */
export type IndexOf<T extends readonly unknown[], U, N extends number = 0> = T extends readonly [infer F, ...infer R]
	? U extends F
		? N
		: IndexOf<R, U, Add<N, 1>>
	: -1;
