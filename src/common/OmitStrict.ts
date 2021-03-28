/**
 * A type-safe version of TypeScript's built-in `Omit`.
 */
export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
