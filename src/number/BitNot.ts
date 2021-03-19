import type { Binary } from './';

type Not<N> = N extends '0'
	? '1'
	: N extends '1'
	? '0'
	: N extends `${infer T}${infer U}`
	? T extends Binary
		? `${Not<T>}${Not<U>}`
		: never
	: never;

export type BitNot<N> = Not<N>;
