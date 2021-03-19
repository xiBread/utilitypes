import type { Filter, Last } from '../';

/**
 * Constructs a type by picking every element in tuple `T` except the last.
 *
 * @example
 * ```ts
 * type T0 = Last<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = [1, 2, 3, 4]
 * ```
 */
export type Initial<T extends unknown[]> = Filter<T, Last<T>>;
