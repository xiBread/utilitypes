type Start<T extends unknown[], N extends number, S extends unknown[] = []> = S['length'] extends N
	? T
	: T extends [infer U, ...infer R]
	? Start<R, N, [U, ...S]>
	: [];

type End<T extends unknown[], N extends number> = T['length'] extends N
	? T
	: T extends [...infer U, infer R]
	? End<U, N>
	: never;

export type Slice<T extends unknown[], X extends number, Y extends number = T['length']> = Start<End<T, Y>, X>;
