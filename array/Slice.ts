import { Index } from "../internal";

type $<T, A, B, U extends 0[] = [], S extends unknown[] = []> = U["length"] extends B
	? S
	: T extends [infer F, ...infer R]
	? $<R, A, B, [...U, 0], U["length"] extends A ? [F] : S extends [] ? [] : [...S, F]>
	: S;

/**
 * @example
 * ```ts
 * in:
 * type T = Slice<[1, 2, 3, 4, 5], 1, 3>;
 *
 * out:
 * type T = [2, 3];
 * ```
 *
 * @example Negative index
 * ```ts
 * in:
 * type T = Slice<[1, 2, 3, 4, 5], -3, -1>;
 *
 * out:
 * type T = [3, 4];
 * ```
 */
export type Slice<
	T extends unknown[],
	A extends number = 0,
	B extends number = T["length"]
> = T extends unknown[] ? $<T, Index<T, A>, Index<T, B>> : never;
