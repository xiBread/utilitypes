import type { IsNegative } from "../number";

type Populate<T extends never[][], N extends number> = T[0][N] extends never
	? T
	: Populate<[[...T[0], ...T[0]], ...T], N>;

type Extract<N extends number, T extends never[][], U extends never[]> = U["length"] extends N
	? U
	: [...T[0], ...U][N] extends never
	? Extract<N, T extends [T[0], ...infer R extends never[][]] ? R : never, U>
	: Extract<N, T extends [T[0], ...infer R extends never[][]] ? R : never, [...T[0], ...U]>;

type Replace<T, U> = { [K in keyof T]: U };

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
export type Tuple<T, N extends number> = number extends N
	? T[]
	: IsNegative<N> extends true
	? never
	: Populate<[[never]], N> extends infer U
	? U extends never[][]
		? Replace<Extract<N, U, []>, T>
		: never
	: never;
