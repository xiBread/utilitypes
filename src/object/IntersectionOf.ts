import type { Compact } from '../';

/**
 * Constructs an intersection type from a union.
 *
 * @example
 * ```ts
 * type T0 = IntersectionOf<{ a: number } | { b: string }>;
 * //	^ type T0 = {
 * //		  a: number;
 * //		  b: string;
 * //	  }
 * ```
 */
export type IntersectionOf<T> = (T extends T ? (x: T) => 0 : never) extends (y: infer U) => 0 ? Compact<U> : never;
