import type { Head, Tail } from '../';

/**
 * Constructs a tuple type from the head and tail of `T`.
 */
export type Deconstruct<T extends readonly unknown[]> = [Head<T>, Tail<T>];
