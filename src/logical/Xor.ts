import type { Operands } from '../';

/**
 * Returns `true` if and only if `A` and `B` differ from each other; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = Xor<false, true>;
 * //	^ = type T0 = true
 *
 * type T1 = Xor<true, true>;
 * //	^ = type T1 = false
 * ```
 */
export type XOR<A extends boolean, B extends boolean> = [A, B] extends Operands[0 | 3]
	? false
	: [A, B] extends Operands[1 | 2]
	? true
	: never;
