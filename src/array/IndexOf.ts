import type { Invert, Range, RecordOf, TupleOf } from '../';

type MapArray<T extends readonly unknown[], N extends number> = Invert<
	Omit<RecordOf<T>, N extends 0 ? '' : number extends N ? '' : `${Range<0, N>}`>
>;

/**
 * Returns the first index of `U` in `T` or `-1` if it's not present.
 *
 * @example
 * ```ts
 * type Colors = ['green', 'red', 'blue', 'yellow', 'red', 'pink'];
 *
 * type T0 = IndexOf<Colors, 'red'>;
 * //	^ = type T0 = "1"
 *
 * type T1 = IndexOf<Colors, 'red', 3>;
 * //	^ = type T1 = "4"
 *
 * type T2 = IndexOf<Colors, 'orange'>;
 * //	^ = type T2 = "-1"
 * ```
 */
export type IndexOf<T extends readonly unknown[], U, N extends number = 0> = MapArray<T, N> extends infer K
	? U extends keyof K
		? TupleOf<K[U]>[0]
		: '-1'
	: never;
