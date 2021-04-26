import type { Expand } from '../';

type Merge<T, U> = Expand<Omit<T, Extract<keyof T, keyof U>>> & U;

/**
 * Constructs a type with each property in `U` assigned to `T`.
 *
 * @example
 * ```ts
 * interface Target {
 * 	a: string;
 * 	b: number;
 * }
 *
 * type Sources = [{ b: { c: any[] } }, { d: boolean }]
 *
 * type T0 = Assign<Target, { a: { b: number } }>;
 * //	^ = type T0 = {
 * //			a: {
 * //				b: number;
 * //			};
 * //			b: number;
 * //		}
 *
 * type T1 = Assign<Target, Sources>;
 * //	^ = type T1 = {
 * //			a: string;
 * //			b: {
 * //				c: any[];
 * //			};
 * //			d: boolean;
 * //		}
 * ```
 */
export type Assign<T, U> = U extends readonly [] | {}
	? T
	: U extends readonly [infer F, ...infer R]
	? Assign<Merge<T, F>, R>
	: Merge<T, U>;
