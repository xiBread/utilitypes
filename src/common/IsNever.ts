/**
 * Returns `true` if `T` is `never`; otherwise, `false`.
 */
export type IsNever<T> = [T] extends [never] ? true : false;
