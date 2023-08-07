type $<T, N, U extends unknown[] = []> = T extends [infer F, ...infer R]
	? U["length"] extends N
		? [U, ...$<R, N, [F]>]
		: $<R, N, [...U, F]>
	: U["length"] extends 0
	? []
	: [U];

/**
 *
 */
export type Chunk<T extends unknown[], N extends number> = $<T, N>;
