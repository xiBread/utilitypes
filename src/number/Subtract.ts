import type { Slice, Tuple } from '../';

export type Subtract<X extends number, Y extends number> = Slice<Tuple<unknown, X>, Y>['length'] & number;
