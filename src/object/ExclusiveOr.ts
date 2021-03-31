import type { ExtendSelf } from '../';

type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

/**
 * Constructs a type by requiring properties of `T` or `U`, but not both together.
 *
 * @example
 * ```ts
 * interface This {
 * 	s: string;
 * 	n: number;
 * }
 *
 * interface That {
 * 	o: object;
 * 	a: any[];
 * }
 *
 * type ThisOrThat = ExclusiveOr<This, That>;
 *
 * const valid: ThisOrThat = {
 * 	s: 'string',
 * 	n: 100
 * };
 *
 * const invalid: ThisOrThat = {
 * //	^ Type 'number[]' is not assignable to type 'never'.
 * 	s: 'string',
 * 	a: [50]
 * }
 * ```
 */
export type ExclusiveOr<T, U> = ExtendSelf<T, XOR<T, U>>;
