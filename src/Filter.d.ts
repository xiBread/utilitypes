export type Filter<T extends unknown[], U> = T extends []
	? []
	: T extends [infer F, ...infer R]
	? F extends U
		? Filter<R, U>
		: [F, ...Filter<R, U>]
	: T;
