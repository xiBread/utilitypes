import type { Operands } from '../';

/**
 * Returns `true` if and only if `X` and `Y` differ from each other; otherwise, `false`.
 *
 * @example
 * type T0 = Xor<false, true>;
 * //	^ = type T0 = true
 *
 * type T1 = Xor<true, true>;
 * //	^ = type T1 = false
 * ```
 */
export type Xor<X extends boolean, Y extends boolean> = [X, Y] extends Operands[0 | 3]
	? false
	: [X, Y] extends Operands[1 | 2]
	? true
	: never;
