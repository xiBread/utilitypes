import type { primitive } from '../';

/**
 * Constructs a type with all deeply nested properties of `T` marked as
 * optional.
 */
export type DeepPartial<T> = T extends primitive
	? Partial<T>
	: T extends object
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: never;
