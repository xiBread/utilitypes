import type { Values } from './__internal__';

/**
 * Constructs a type by picking `K` based on `U` from `T`.
 */
export type PickBy<T, U, K extends Values<T, U>> = Pick<T, K>;
