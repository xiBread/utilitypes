import type { IntersectionOf } from '../object';

export type LastType<T> = IntersectionOf<T extends unknown ? (x: T) => void : never> extends (x: infer U) => void
	? U
	: never;
