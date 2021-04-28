import type { Primitive } from '../';

/**
 * Constructs a type with all deeply nested properties of `T` set to optional.
 */
export type DeepPartial<T> = T extends Primitive
	? Partial<T>
	: T extends object
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: never;
