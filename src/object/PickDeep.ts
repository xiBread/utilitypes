import type { Expand, IntersectionOf, Path } from '../';

type PickGet<T, K extends Path<T>> = K extends `${infer F}.${infer R}`
	? F extends keyof T
		? R extends Path<T[F]>
			? { [K in F]: PickGet<T[F], R> }
			: never
		: never
	: K extends keyof T
	? { [P in K]: T[P] }
	: never;

export type PickDeep<T, K extends Path<T>> = Expand<IntersectionOf<PickGet<T, K>>>;
