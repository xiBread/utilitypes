/**
 * Constructs an array type by excluding from `T` those elements that are assignable to `U`.
 *
 * @example
 * ```ts
 * type T0 = Filter<[1, 2, 3, 'a', 4], string>;
 * //	^ = type T0 = [1, 2, 3, 4]
 * ```
 */
export type Filter<T extends readonly unknown[], U> = T extends readonly [infer F, ...infer R]
	? F extends U
		? Filter<R, U>
		: [F, ...Filter<R, U>]
	: T;
