/**
 * A type-safe version of TypeScript's built-in `Omit` that allows IntelliSense to provide
 * autocompletion for `K`.
 */
export type OmitStrict<T, K extends keyof T> = Omit<T, K>;
