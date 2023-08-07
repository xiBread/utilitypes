type Child<T, K extends keyof T> = Exclude<keyof T[K], keyof any[]> & string;

type $<T, K extends keyof T, M> = K extends string
	? T[K] extends Record<string, any>
		? M extends "loose"
			? `${K}.${$<T[K], Child<T, K>, M>}` | `${K}.${Child<T, K>}`
			: `${K}.${$<T[K], Child<T, K>, M>}`
		: M extends "loose"
		? never
		: `${K}`
	: never;

export type PathMode = "strict" | "loose";

/**
 *
 */
export type Path<T, M extends PathMode = "loose"> =
	| $<T, keyof T, M>
	| keyof T extends infer U extends string | keyof T
	? U
	: keyof T;
