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
 * const o = {
 * 	a: 1,
 * 	b: {
 * 		c: {
 * 			d: 2
 * 		},
 * 		f: 3
 * 	}
 * }
 *
 * declare function f1<T extends StrictPath<typeof o>>(path: T): void;
 *
 * f1('a');
 * f1('b.c.d');
 * f1('b.c');
 * //	^ Argument of type '"b.c"' is not assignable to parameter of type '"a" | "b.f" | "b.c.d"'.
 * ```
 */
export type StrictPath<T> = ExtendSelf<T, PathString<T, keyof T>>;
