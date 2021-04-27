import type { KeyBy } from '../';

/**
 * Constructs a type by picking `K` based on `U` from `T`.
 */
export type PickBy<T, U, K extends KeyBy<T, U>> = Pick<T, K>;
