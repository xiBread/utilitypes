/**
 * A type-safe version of TypeScript's built-in `Exclude` that allows IntelliSense to provide
 * autocompletion for `U`.
 */
export type ExcludeStrict<T, U extends T> = Exclude<T, U>;
