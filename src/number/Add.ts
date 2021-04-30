import type { Tuple } from '../';

/**
 * Returns the sum of `X` and `Y`.
 *
 * @example
 * ```ts
 * type T0 = Add<52, 95>;
 * //	^ = type T0 = 147
 *
 * type T1 = Add<2368, 4527>;
 * //	^ = type T1 = 6895
 */
export type Add<X extends number, Y extends number> = [...Tuple<unknown, X>, ...Tuple<unknown, Y>]['length'] & number;
