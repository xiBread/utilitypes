type $<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never;

/**
 *
 */
export type IsUnion<T> = $<T>;
