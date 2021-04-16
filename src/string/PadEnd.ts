import type { Length } from '../';

/**
 * Pads the ends of a string with `T` until the total length of `S` is equal to `N`.
 *
 * @example
 * ```ts
 * type T0 = PadEnd<'Breaded Mushrooms', 25, '.'>;
 * //	^ = type T0 = "Breaded Mushrooms........"
 *
 * type T1 = PadEnd<'200', 5>;
 * //	^ = type T1 = "200 "
 * ```
 */
export type PadEnd<S extends string, N extends number, T extends string = ' '> = Length<S> extends N
	? S
	: PadEnd<`${S}${T}`, N, T>;
