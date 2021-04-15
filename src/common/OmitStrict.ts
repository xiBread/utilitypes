/**
 * A type-safe version of TypeScript's built-in `Omit`.
 */
export type OmitStrict<T, K extends keyof T> = Omit<T, K>;
