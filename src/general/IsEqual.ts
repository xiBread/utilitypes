/**
 * Returns `true` if and only if `X` and `Y` are equal to each other; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = IsEqual<{ a: string }, { b: string }>;
 * //	^ = type T0 = false
 *
 * type T1 = IsEqual<[1, 2, 3], readonly [1, 2, 3]>;
 * //	^ = type T1 = false
 *
 * type T2 = IsEqual<'a' | 'b', 'a' | 'b'>;
 * //	^ = type T2 = true
 * ```
 */
export type IsEqual<X, Y> = (<T>() => T extends X ? true : false) extends <T>() => T extends Y ? true : false
	? true
	: false;
