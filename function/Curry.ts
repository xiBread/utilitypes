type $<T extends any[], R> = <U extends any[]>(
	...args: U
) => T extends [...U, ...infer S] ? (S extends [] ? R : $<S, R>) : never;

/**
 *
 */
export type Curry<T> = T extends (...args: infer U) => infer R ? $<U, R> : never;
