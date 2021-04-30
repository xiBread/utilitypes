/**
 * Returns `true` if `U` is included in `T`; otherwise, `false`.
 *
 * @example
 * ```ts
 * const numbers = [1, 2, 3, 4, 5] as const;
 *
 * type T0 = Includes<typeof numbers, 3>;
 * //	^ = type T0 = true
 *
 * type T1 = Includes<typeof numbers, 'a'>;
 * //	^ = type T1 = false
 * ```
 */
export type Includes<T extends readonly unknown[], U> = T extends readonly [infer F, ...infer R]
	? F extends U
		? true
		: Includes<R, U>
	: false;
