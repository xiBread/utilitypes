import type { Initial } from '../';
import type { Operands } from './';

/**
 * Returns `true` if and only if `X` and `Y` are `true`; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = And<false, true>;
 * //	^ = type T0 = false
 *
 * type T1 = And<true, true>;
 * //	^ = type T1 = false
 * ```
 */
export type And<X extends boolean, Y extends boolean> = [X, Y] extends Operands[3]
	? true
	: [X, Y] extends Initial<Operands>[number]
	? false
	: never;
