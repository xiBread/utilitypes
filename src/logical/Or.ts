import type { Operands, Tail } from '../';

/**
 * Returns `true` if and only if either `A` or `B`, or both, are `true`; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = OR<false, true>;
 * //	^ = type T0 = true
 *
 * type T1 = OR<false, false>
 * //	^ type T1 = false
 * ```
 */
export type OR<A extends boolean, B extends boolean> = [A, B] extends Operands[0]
	? false
	: [A, B] extends Tail<Operands>[number]
	? true
	: never;
