import type { RecordOf, TupleOf, Zip } from '../';

/**
 * Constructs an array type whose entries are key-value pairs from `T`.
 *
 * @example
 * ```ts
 * type T0 = Entries<{ a: 1, b: 2, c: 3 }>;
 * //	^ = type T0 = [["a", 1], ["b", 2], ["c", 3]]
 *
 * type T1 = Entries<['a', 'b', 'c']>;
 * //	^ = type T1 = [["0", "a"], ["1", "b"], ["2", "c"]]
 * ```
 */
export type Entries<T> = T extends readonly unknown[]
	? Entries<RecordOf<T>>
	: T extends Record<infer K, infer V>
	? Zip<[TupleOf<K>, TupleOf<V>]>
	: [];
