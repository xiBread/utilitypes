import type { KeyBy } from '../';

/**
 * Constructs a type by omitting each property in `T` based on `U`.
 */
export type OmitAllBy<T, U> = Omit<T, KeyBy<T, U>>;
