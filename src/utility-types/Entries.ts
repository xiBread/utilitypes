import type { ExtendSelf } from '../';

/* prettier-ignore */
type EntryPairing<T> = T extends object
	? ReadonlyArray<readonly [keyof T, T[keyof T]]>
	: T extends unknown[]
		? readonly [number, T[number]]
		: T extends Set<unknown>
			? T extends Set<infer V>
				? readonly [V, V]
				: never
			: T extends Map<unknown, unknown>
		? [
			T extends Map<infer K, unknown> 
				? K : never, 
			T extends Map<infer V, unknown> 
				? V : never
		]
	: never;

/**
 * Constructs a tuple type from `T` whose entries are key-value pairs.
 */
export type Entries<T> = ExtendSelf<T, EntryPairing<T>>;
