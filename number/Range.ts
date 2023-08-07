import type { Add, Gte } from "./";

interface Default extends RangeOptions {
	step: 1;
	inclusive: false;
}

type $<A extends number, B extends number, T extends number[], O extends RangeOptions> = Gte<
	A,
	B
> extends true
	? O["inclusive"] extends true
		? [...T, B]
		: T
	: $<Add<A, O["step"] extends number ? O["step"] : 1>, B, [...T, A], O>;

/**
 *
 */
export interface RangeOptions {
	/**
	 * @default 1
	 */
	step?: number;

	/**
	 * @default false
	 */
	inclusive?: boolean;
}

/**
 * @example
 * ```ts
 * in:
 * type T = Range<0, 10>;
 *
 * out:
 * type T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 * ```
 *
 * @example Inclusive end
 * ```ts
 * in:
 * type T = Range<0, 10, { inclusive: true }>;
 *
 * out:
 * type T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * ```
 *
 * @example Specifying a step
 * ```ts
 * in:
 * type T = Range<0, 10, { step: 2 }>;
 *
 * out:
 * type T = [0, 2, 4, 6, 8];
 * ```
 */
export type Range<A extends number, B extends number, O extends RangeOptions = Default> = Gte<
	A,
	B
> extends true
	? []
	: $<A, B, [], O>;
