import type { ExtendSelf } from '../';

type IOR<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>> &
	{
		[K in U]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<U, K>>>;
	}[U];

/**
 * Constructs a type by requiring at least one property of `T`.
 */
export type InclusiveOr<T, K extends keyof T> = ExtendSelf<T, IOR<T, K>>;
