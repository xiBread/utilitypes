import type { Filter, Head } from '../';

export type Tail<T extends unknown[]> = Filter<T, Head<T>>;
