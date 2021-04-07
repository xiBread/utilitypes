import type { Head, Tail } from '../';

/**
 * Constructs a tuple type from the head and tail of `T`.
 */
export type Deconstruct<T extends unknown[]> = [Head<T>, Tail<T>];
