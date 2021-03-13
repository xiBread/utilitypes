/**
 * Constructs a union type from each union member assignable to `T` and `U`, but are not found in
 * their intersection.
 *
 * @example
 * ```ts
 * type T0 = SymmetricDifference<'1' | '2' | '3', '3' | '4'>;
 * //	^ = type T0 = '1' | '2' | '4'
 * ```
 */
export type SymmetricDifference<T, U> = Exclude<T | U, T & U>;
