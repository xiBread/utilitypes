/** @internal */
export type Index<
	T extends unknown[],
	N extends number,
	U extends 0[] = []
> = `${N}` extends `${U["length"]}`
	? U["length"]
	: `${N}` extends `-${U["length"]}`
	? T["length"]
	: T extends [unknown, ...infer R]
	? Index<R, N, [...U, 0]>
	: U["length"];

/** @internal */
export type KeyBy<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
