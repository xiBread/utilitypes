/**
 * A type-safe version of TypeScript's built-in `Extract` that allows IntelliSense to provide
 * autocompletion for `U`.
 */
export type ExtractStrict<T, U extends T> = Exclude<T, U>;
