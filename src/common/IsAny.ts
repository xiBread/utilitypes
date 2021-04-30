/**
 * Returns `true` if `T` is `any`; otherwise, `false`.
 */
export type IsAny<T> = 0 extends 1 & T ? true : false;
