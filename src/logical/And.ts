import type { Initial } from '../';
import type { Operands } from './';

/**
 * Returns `true` if and only if `A` and `B` are `true`; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = AND<false, true>;
 * //	^ = type T0 = false
 *
 * type T1 = AND<true, true>;
 * //	^ = type T1 = false
 * ```
 */
export type AND<X extends boolean, Y extends boolean> = [X, Y] extends Operands[3]
	? true
	: [X, Y] extends Initial<Operands>[number]
	? false
	: never;
