type Distribute<T extends never[][], N extends number> = T[0][N] extends never
	? T
	: Distribute<[[...T[0], ...T[0]], ...T], N>;

type Iterate<N extends number, T extends never[][], U extends never[]> = U['length'] extends N
	? U
	: [...T[0], ...U][N] extends never
	? Iterate<N, T extends [T[0], ...infer R] ? (R extends never[][] ? R : never) : never, U>
	: Iterate<N, T extends [T[0], ...infer R] ? (R extends never[][] ? R : never) : never, [...T[0], ...U]>;

type Replace<T, U> = { [K in keyof T]: U };

type Populate<T, N extends number> = {
	[K in N]: Distribute<[[never]], K> extends infer U
		? U extends never[][]
			? Replace<Iterate<K, U, []>, T>
			: never
		: never;
}[N];

/**
 * Constructs a tuple type of `T` with a length of `N`.
 *
 * @example
 * ```ts
 * type T0 = Tuple<number, 3>;
 * //	^ = type T0 = [number, number, number]
 * ```
 */
export type Tuple<T, N extends number> = number extends N ? T[] : Populate<T, N>;
