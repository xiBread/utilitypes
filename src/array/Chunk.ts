import type { Slice } from '../';

type Separate<T extends readonly unknown[], N extends number, U extends unknown[] = []> = T extends []
	? U
	: Slice<T, 0, N> extends infer R
	? R extends unknown[]
		? Separate<Slice<T, N>, N, [...U, R]>
		: never
	: never;

export type Chunk<T extends readonly unknown[], N extends number> = Separate<T, N>;
