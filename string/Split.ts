import type { Slice } from "../array";

type $<S extends string, U extends string, T extends string[] = []> = S extends `${infer _}`
	? S extends `${infer F}${U}${infer R}`
		? $<R, U, [...T, F]>
		: S extends ""
		? U extends ""
			? [...T]
			: [...T, S]
		: [...T, S]
	: string[];

/**
 *
 */
export type Split<
	S extends string,
	U extends string = string,
	N extends number = number
> = string extends U ? [S] : number extends N ? $<S, U> : N extends 0 ? [] : Slice<$<S, U>, 0, N>;
