import type { CastAs, Invert, ParseInt, Range, RecordOf, TupleOf } from '../';

type MapArray<T extends readonly unknown[], N extends number> = Invert<
	Omit<RecordOf<T>, N extends 0 ? '' : number extends N ? '' : `${Range<0, N>}`>
>;

/**
 * Returns the first index of `U` in `T` or `-1` if it's not present.
 *
 * @example
 * ```ts
 * const colors = ['green', 'red', 'blue', 'yellow', 'red', 'pink'] as const;
 *
 * type T0 = IndexOf<typeof colors, 'red'>;
 * //	^ = type T0 = 1
 *
 * type T1 = IndexOf<typeof colors, 'red', 3>;
 * //	^ = type T1 = 4
 *
 * type T2 = IndexOf<typeof colors, 'orange'>;
 * //	^ = type T2 = -1
 * ```
 */
export type IndexOf<T extends readonly unknown[], U, N extends number = 0> = MapArray<T, N> extends infer K
	? U extends keyof K
		? ParseInt<CastAs<TupleOf<K[U]>[0], `${number}`>>
		: -1
	: never;
