import type { FunctionLike, primitive } from '../';

/**
 * Constructs a type with all deeply nested properties of `T` marked as
 * `readonly`.
 */
export type DeepReadonly<T> = T extends primitive | FunctionLike
	? T
	: T extends object
	? { readonly [K in keyof T]: DeepReadonly<T[K]> }
	: never;
