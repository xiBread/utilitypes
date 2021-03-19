import type { ExtendSelf, Primitive } from '../';

type DeepReadonlyImpl<T> = T extends Primitive | ((...args: any[]) => unknown)
	? T
	: T extends ReadonlyMap<infer K, infer V>
	? ReadonlyMap<DeepReadonlyImpl<K>, DeepReadonlyImpl<V>>
	: T extends ReadonlySet<infer V>
	? ReadonlySet<DeepReadonlyImpl<V>>
	: T extends object
	? { readonly [K in keyof T]: DeepReadonlyImpl<T[K]> }
	: unknown;

/**
 * Constructs a type with all deeply nested properties of `T` set to `readonly`.
 */
export type DeepReadonly<T> = ExtendSelf<T, DeepReadonlyImpl<T>>;
