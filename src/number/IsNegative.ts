import type { Absolute } from '../';

export type IsNegative<N extends number> = Absolute<N> extends N ? false : true;
