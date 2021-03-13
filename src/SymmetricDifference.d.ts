/**
 * Constructs a union type from each union member assignable to `T` and `U`, but are not found in
 * their intersection.
 */
export type SymmetricDifference<T, U> = Exclude<T | U, T & U>;
