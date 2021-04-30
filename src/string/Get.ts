import type { Path } from '../';

/**
 * Constructs a type by extracting the type of `P` from `T`.
 *
 * @example
 * ```ts
 * const profile = {
 * 	id: 325710,
 * 	name: 'John Doe',
 * 	contact: {
 * 		number: '662-733-1891',
 * 		email: {
 * 			work: 'john.doe@business.com',
 * 			personal: 'john.doe@gmail.com'
 * 		}
 * 	}
 * } as const
 *
 * type T0 = Get<typeof profile, 'contact.email.work'>;
 * //	^ = type T0 = "john.doe@business.com"
 * ```
 */
export type Get<T, P extends Path<T>> = P extends `${infer K}.${infer R}`
	? K extends keyof T
		? R extends Path<T[K]>
			? Get<T[K], R>
			: never
		: never
	: P extends keyof T
	? T[P]
	: never;
