import type { Compare } from '../';

export type GreaterThan<X extends number, Y extends number> = Compare<X, Y> extends 1 ? true : false;
