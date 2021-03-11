import type { ExtendSelf } from './__internal__';

type IOR<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>> &
	{
		[K in U]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<U, K>>>;
	}[U];

export type InclusiveOr<T, K extends keyof T> = ExtendSelf<T, IOR<T, K>>;
