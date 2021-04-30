import type { ExtendSelf } from '../';

type PathString<T, K extends keyof T> = K extends string
	? T[K] extends Record<string, any>
		? `${K}.${PathString<T[K], Exclude<keyof T[K], PropertyKey[]>> & string}`
		: `${K}`
	: never;

/**
 * Constructs a union type from each deeply nested property in `T` whose values aren't nested.
 *
 * @example
 * ```ts
 * interface Nested {
 * 	a: string;
 * 	b: {
 * 		c: number;
 * 		d: {
 * 			e: boolean;
 * 		}
 * 	}
 * 	f: bigint
 * }
 *
 * type T0 = StrictPath<Nested>;
 * //	^ = type T0 = "a" | "f" | "b.c" | "b.d.e"
 * ```
 */
export type StrictPath<T> = ExtendSelf<T, PathString<T, keyof T>>;
