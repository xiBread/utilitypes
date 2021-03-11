import type { ExtendSelf } from './__internal__';

type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export type ExclusiveOr<T, U> = ExtendSelf<T, XOR<T, U>>;
