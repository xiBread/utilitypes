import type { ExtendSelf } from '../';

type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

/**
 * Constructs a type by requiring properties of `T` or `U`, but not both together.
 */
export type ExclusiveOr<T, U> = ExtendSelf<T, XOR<T, U>>;
