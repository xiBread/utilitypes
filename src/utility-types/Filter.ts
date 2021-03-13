/**
 * Constructs a tuple type by filtering `U` from `T`.
 */
export type Filter<T extends unknown[], U> = T extends []
	? []
	: T extends [infer F, ...infer R]
	? F extends U
		? Filter<R, U>
		: [F, ...Filter<R, U>]
	: T;
