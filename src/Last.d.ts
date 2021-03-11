export type Last<T extends unknown[]> = T extends [infer U]
	? U
	: T extends [infer F, ...infer R]
	? Last<R>
	: never;
