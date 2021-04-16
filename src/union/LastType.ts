import type { IntersectionOf } from '../';

/**
 * Constructs a type by picking the last member in `T`.
 *
 * @example
 * ```ts
 * type T0 = LastType<'a' | 'b' | 'c'>;
 * //	^ = type T0 = "c"
 * ```
 */
export type LastType<T> = IntersectionOf<T extends unknown ? (x: T) => void : never> extends (x: infer U) => void
	? U
	: never;
