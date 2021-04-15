import type { FixedTuple, Slice } from '../';

export type Subtract<X extends number, Y extends number> = Slice<FixedTuple<unknown, X>, Y>['length'];
