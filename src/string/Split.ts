import type { Initial } from '../';

/**
 * Constructs a tuple type, excluding `U`, by splitting `S` by `U`.
 *
 * @example
 * ```ts
 * type T0 = Split<'aaa7bbb7ccc', '7'>;
 * //	^ = type T0 = ["aaa", "bbb", "ccc"]
 * ```
 */
export type Split<S extends string, U extends string> = S extends `${infer F}${U}${infer R}`
	? [F, ...Split<R, U>]
	: U extends ''
	? Initial<[S]>
	: [S];
