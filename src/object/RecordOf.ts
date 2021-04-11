import type { UnionOf } from '../union';

/**
 * Constructs an object type whose property keys are the values from either a union or tuple type.
 */
export type RecordOf<T> = T extends keyof any
	? { [K in T]: K }
	: T extends readonly (keyof any)[]
	? { [K in UnionOf<T>]: K }
	: T extends Record<keyof any, unknown>
	? T
	: never;
