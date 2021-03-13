type Populate<N extends number, R extends never[][]> = R[0][N] extends never
	? R
	: Populate<N, [[...R[0], ...R[0]], ...R]>;

type Concat<N extends number, R extends never[][], B extends never[]> = B['length'] extends N
	? B
	: [...R[0], ...B][N] extends never
	? Concat<N, R extends [R[0], ...infer U] ? (U extends never[][] ? U : never) : never, B>
	: Concat<N, R extends [R[0], ...infer U] ? (U extends never[][] ? U : never) : never, [...R[0], ...B]>;

type Replace<T, U> = { [K in keyof T]: U };

type Tuple<T, N extends number> = {
	[K in N]: Populate<K, [[never]]> extends infer U
		? U extends never[][]
			? Replace<Concat<K, U, []>, T>
			: never
		: never;
}[N];

/**
 * Constructs a tuple type from `T` with a fixed length of `N`.
 *
 * @example
 * ```ts
 * type T0 = TupleOf<number, 3>;
 * //	^ = type T0 = [number, number, number]
 * ```
 */
export type TupleOf<T, N extends number> = number extends N ? T[] : Tuple<T, N>;
