import type { Filter, Split } from '../';

/**
 * Constructs a tuple type, excluding `U`, by splitting `S` by `U`.
 *
 * @example
 * ```ts
 * type T0 = SplitBy<'aaa7bbb7ccc', '7'>;
 * //	^ = type T0 = ["aaa", "bbb", "ccc"]
 * ```
 */
export type SplitBy<S extends string, U extends string> = Filter<Split<S, U>, U>;
