import { ExtendSelf, Primitive } from '../';

type DeepPartialImpl<T> = T extends Primitive
	? Partial<T>
	: T extends Set<infer V>
	? Set<DeepPartialImpl<V>>
	: T extends Map<infer K, infer V>
	? Map<DeepPartialImpl<K>, DeepPartialImpl<V>>
	: T extends object
	? { [K in keyof T]?: DeepPartialImpl<T[K]> }
	: unknown;

/**
 * Constructs a type with all deeply nested properties of `T` set to optional.
 */
export type DeepPartial<T> = ExtendSelf<T, DeepPartialImpl<T>>;