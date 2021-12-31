interface Permutation<T, K = T> {
	0: [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>[0]] : never;
}

/**
 * Constructs a union type of tuples with each possible variant of how `T` can be arranged.
 *
 * @example
 * ```ts
 * type T0 = Permutate<'A' | 'B'>;
 * //	^ = type T0 = ["A", "B"] | ["B", "A"]
 *
 * type T1 = Permutate<[1, 2, 3]>;
 * //	^ = type T1 = [1, 2, 3] | [1, 3, 2] | [3, 1, 2] | [3, 2, 1] | [2, 1, 3] | [2, 3, 1]
 * ```
 */
export type Permutate<T> = Permutation<T extends readonly unknown[] ? T[number] : T>;
