/**
 * Returns `true` if `T` is a tuple type; otherwise, `false`.
 */
export type IsTuple<T> = T extends unknown[] ? (number extends T['length'] ? false : true) : false;
