import type { Tuple } from '../';

/**
 * Returns the sum of `X` and `Y` as a `number`. This is limited to numeric sums less than or equal
 * to`9999`; use `Sum` if you need to exceed this limit (note that `Sum` returns a `string`).
 *
 * @example
 * ```ts
 * type T0 = Add<52, 95>;
 * //	^ = type T0 = 147
 *
 * type T1 = Add<5000, 5000>;
 * //	^ Type produces a tuple type that is too large to represent.
 * ```
 */
export type Add<X extends number, Y extends number> = [...Tuple<unknown, X>, ...Tuple<unknown, Y>]['length'] & number;
