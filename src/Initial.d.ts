import type { Filter, Last } from '../';

/**
 * Constructs a type by picking every element in tuple `T` except the last.
 */
export type Initial<T extends unknown[]> = Filter<T, Last<T>>;
