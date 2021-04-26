import type { Tuple } from '../';

export type Add<X extends number, Y extends number> = [...Tuple<unknown, X>, ...Tuple<unknown, Y>]['length'] & number;
