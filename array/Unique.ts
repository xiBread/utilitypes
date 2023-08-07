import type { Extends, If } from "../boolean";

type $<T extends unknown[], U extends any[] = []> = T extends [infer F, ...infer R]
	? $<R, If<Extends<F, U[number]>, U, [...U, F]>>
	: U;

/**
 * @example
 * ```ts
 * in:
 * type T = Unique<[1, 2, "a", 2, 3, 4, "a", "b", 1, "c"]>;
 *
 * out:
 * type T = [1, 2, "a", 3, 4, "b", "c"];
 * ```
 */
export type Unique<T extends unknown[]> = $<T>;
