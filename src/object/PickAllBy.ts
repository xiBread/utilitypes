import type { KeyBy } from '../';

/**
 * Constructs a type by picking each property in `T` based on `U`.
 */
export type PickAllBy<T, U> = Pick<T, KeyBy<T, U>>;
