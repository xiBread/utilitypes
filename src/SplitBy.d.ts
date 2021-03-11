import type { Filter, Split } from '../';

export type SplitBy<S extends string, U extends string> = Filter<Split<S, U>, U>;
