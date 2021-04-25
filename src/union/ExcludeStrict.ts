/**
 * A type-safe version of TypeScript's built-in `Exclude`.
 */
export type ExcludeStrict<T, U extends T> = Exclude<T, U>;
