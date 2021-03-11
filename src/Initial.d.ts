import type { Filter, Last } from '../';

export type Initial<T extends unknown[]> = Filter<T, Last<T>>;
