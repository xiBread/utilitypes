/**
 * A type-safe version of TypeScript's built-in `Extract`.
 */
export type ExtractStrict<T, U extends T> = Exclude<T, U>;
