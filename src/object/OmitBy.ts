import type { KeyBy } from '../';

/**
 * Constructs a type by omitting `K` based on `U` from `T`.
 */
export type OmitBy<T, U, K extends KeyBy<T, U>> = Omit<T, K>;
