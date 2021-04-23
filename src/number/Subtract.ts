import type { CastAs, FixedTuple, Slice } from '../';

export type Subtract<X extends number, Y extends number> = CastAs<Slice<FixedTuple<unknown, X>, Y>['length'], number>;
