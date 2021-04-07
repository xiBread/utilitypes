/**
 * Constructs a tuple type, including `U`, by splitting `S` by `U`.
 *
 * @example
 * ```ts
 * type T0 = SplitWith<'aaa7bbb7ccc', '7'>;
 * //	^ = type T0 = ["aaa", "7", "bbb", "7", "ccc"]
 * ```
 */
export type SplitWith<S extends string, U extends string> = S extends `${infer F}${U}${infer R}`
	? S extends `${F}${infer T}${R}`
		? T extends U
			? S extends `${infer F}${T}${infer R}`
				? [...SplitWith<F, U>, T, ...SplitWith<R, U>]
				: never
			: never
		: never
	: [S];
