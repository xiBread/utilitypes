import type { Expand, IntersectionOf, Path } from '../';

type OmitGet<T, K extends Path<T>> = K extends `${infer F}.${infer R}`
	? F extends keyof T
		? R extends Path<T[F]>
			? { [K in F]: OmitGet<T[F], R> }
			: never
		: never
	: K extends keyof T
	? { [P in Exclude<keyof T, K>]: T[P] }
	: never;

export type OmitDeep<T, K extends Path<T>> = Expand<IntersectionOf<OmitGet<T, K>>>;
