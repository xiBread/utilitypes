import type { Extends, Or } from "../boolean";
import type { IsNegative } from "../number";

type Spread<T extends unknown[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];

type Child<T, N extends string, U extends T[] = []> = `${N}` extends `${U["length"]}`
	? U
	: Child<T, N, [T, ...U]>;

type Populate<T, N extends string, U extends unknown[] = []> = `${N}` extends `${infer F}${infer R}`
	? Populate<T, R, [...Child<T, F>, ...Spread<U>]>
	: U;

/**
 * Creates an array of {@link T} with a length of {@link N}.
 *
 * @template T The type of the tuple
 * @template N The length of the tuple
 *
 * @example
 * ```ts
 * in:
 * type T = Tuple<string, 3>;
 *
 * out:
 * type T = [string, string, string];
 * ```
 */
export type Tuple<T, N extends number> = Or<Extends<number, N>, IsNegative<N>> extends true
	? T[]
	: Populate<T, `${N}`>;
