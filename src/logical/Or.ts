import { Tail } from '../array';
import { Operands } from './';

/**
 * Returns `true` if and only if either `X` or `Y`, or both, are `true`; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = Or<false, true>;
 * //	^ = type T0 = true
 *
 * type T1 = Or<false, false>
 * //	^ type T1 = false
 * ```
 */
export type Or<X extends boolean, Y extends boolean> = [X, Y] extends Operands[0]
	? false
	: [X, Y] extends Tail<Operands>[number]
	? true
	: never;
