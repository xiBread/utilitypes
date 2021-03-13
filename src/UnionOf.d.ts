/**
 * Constructs a union type from an intersection or the elements of a tuple.
 *
 * @example
 * ```ts
 * const array = ['a', 'b', 'c'] as const;
 *
 * type T0 = UnionOf<typeof array>;
 * //	^ = type T0 = 'a' | 'b' | 'c'
 *
 * type T1 = UnionOf<{ a: number } & { b: string }>;
 * //	^ = type T1 = {
 * //			a: number;
 * // 		} | {
 * //			b: string;
 * // 		}
 * ```
 */
export type UnionOf<T> = T extends readonly unknown[]
	? T[number]
	: T extends object
	? { [K in keyof T]: { [P in K]: T[P] } }[keyof T]
	: never;
