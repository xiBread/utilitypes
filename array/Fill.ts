import type { Index } from "../internal";

type $<T, N, A, B, X extends unknown[] = [], Y extends unknown[] = []> = T extends readonly [
	infer F,
	...infer R
]
	? Y["length"] extends B
		? [F, ...$<R, N, A, B, X, Y>]
		: X["length"] extends A
		? [N, ...$<R, N, A, B, X, [...Y, F]>]
		: [F, ...$<R, N, A, B, [...X, F], [...Y, F]>]
	: [];

/**
 * @example
 * ```ts
 * in:
 * type T = Fill<[1, 2, 3, 4, 5], 6>;
 *
 * out:
 * type T = [6, 6, 6, 6, 6];
 * ```
 *
 * @example From the end
 * ```
 * in:
 * type T = Fill<[1, 2, 3, 4, 5], "a", -3>;
 *
 * out:
 * type T = [1, 2, "a", "a", "a"];
 * ```
 */
export type Fill<T extends unknown[], U, A extends number = 0, B extends number = number> = $<
	T,
	U,
	Index<T, A>,
	Index<T, B>
>;
