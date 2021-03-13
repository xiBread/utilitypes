/**
 * Constructs a union type from an intersection or the elements of a tuple.
 */
export type UnionOf<T> = T extends readonly unknown[]
	? T[number]
	: T extends object
	? { [K in keyof T]: { [P in K]: T[P] } }[keyof T]
	: never;
