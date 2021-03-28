import type { Values } from '../';

/**
 * Constructs a type by omitting each property in `T` based on `U`.
 */
export type OmitAllBy<T, U> = Omit<T, Values<T, U>>;
