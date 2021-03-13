import type { Filter, Split } from '../';

/**
 * Constructs a tuple type, excluding `U`, by splitting `S` by `U`.
 */
export type SplitBy<S extends string, U extends string> = Filter<Split<S, U>, U>;
