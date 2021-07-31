import type { ExtendSelf } from '../internal';

type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

/**
 * Constructs an object type whose property keys and values are required from either `T` or `U`.
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
 * 	a: boolean[];
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
