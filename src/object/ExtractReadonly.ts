import type { IsEqual } from '../';

/**
 * Constructs a type consisting of all properties of `T` that are required.
 *
 * @example
 * ```ts
 * interface Product {
 * 	readonly id: number;
 * 	readonly type: number;
 * 	price: string;
 * }
 *
 * type Static = ExtractReadonly<Product>;
 * //	^ = type Static = {
 * //			readonly id: number;
 * //			readonly type: number;
 * //		}
 * ```
 */
export type ExtractReadonly<T> = Pick<
	T,
	{
		[K in keyof T]: IsEqual<{ -readonly [P in K]: T[P] }, { [P in K]: T[P] }> extends true ? never : K;
	}[keyof T]
>;
