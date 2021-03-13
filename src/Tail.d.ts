import type { Filter, Head } from '../';

/**
 * Constructs a type by picking every element in tuple `T` except the first.
 */
export type Tail<T extends unknown[]> = Filter<T, Head<T>>;
