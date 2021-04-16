import type { Length } from '../';

/**
 * Pads the start of a string with `T` until the total length of `S` is equal to `N`.
 *
 * @example
 * ```ts
 * type T0 = PadStart<'5', 3, '0'>;
 * //	^ = type T0 = "005"
 *
 * type T1 = PadStart<'Computer', 12>;
 * //	^ = type T1 = "    Computer"
 * ```
 */
export type PadStart<S extends string, N extends number, T extends string = ' '> = Length<S> extends N
	? S
	: PadStart<`${T}${S}`, N, T>;
