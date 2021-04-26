import type { IsNegative } from '../';

/**
 * Returns either a `1` or `-1` indicating the sign of `N` or `0` if `N` is `0`.
 *
 * @example
 * ```ts
 * type T0 = Sign<5>;
 * //	^ = type T0 = 1
 *
 * type T1 = Sign<-11>;
 * //	^ = type T1 = -1
 *
 * type T2 = Sign<0>;
 * //	^ = type T2 = 0
 * ```
 */
export type Sign<N extends number> = N extends 0 ? 0 : IsNegative<N> extends true ? -1 : 1;
