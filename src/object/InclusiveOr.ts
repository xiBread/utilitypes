import type { ExtendSelf } from '../';

type IOR<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>> &
	{
		[K in U]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<U, K>>>;
	}[U];

/**
 * Constructs a type by requiring at least one property of `T`.
 *
 * @example
 * ```ts
 * interface A {
 * 	a?: string;
 * 	b?: number;
 * 	c?: any[];
 * 	d?: boolean;
 * }
 *
 * type T0 = InclusiveOr<A, 'a' | 'b'>;
 *
 * const valid: T0 = {
 * 	a: 'string',
 * 	b: 42
 * };
 *
 * const invalid: T0 = {
 * //	^ Property 'b' is missing in type '{ c: null[]; d: false; }' but required in type 'Required<Pick<A, "b">>'.
 * 	c: [null],
 * 	d: false
 * };
 * ```
 */
export type InclusiveOr<T, K extends keyof T> = ExtendSelf<T, IOR<T, K>>;
