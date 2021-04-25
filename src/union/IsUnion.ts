type Check<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never;

/**
 * Returns `true` if `T` is a union type; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = IsUnion<string>;
 * //	^ = type T0 = false
 *
 * type T1 = IsUnion<string | number>;
 * //	^ = type T1 = true
 *
 * type T2 = IsUnion<[boolean | object]>;
 * //	^ = type T2 = false
 */
export type IsUnion<T> = Check<T>;
