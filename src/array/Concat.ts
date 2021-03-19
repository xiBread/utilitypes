/**
 * Constructs a tuple type by merging `B` with `A`.
 */
export type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B];
