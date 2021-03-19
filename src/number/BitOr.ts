import type { Binary } from './';

export type Or<X, Y> = [X, Y] extends ['0', '0']
	? '0'
	: [X, Y] extends ['0', '1'] | ['1', '0'] | ['1', '1']
	? '1'
	: [X, Y] extends [`${infer A}${infer T}`, `${infer B}${infer U}`]
	? [A, B] extends [Binary, Binary]
		? `${Or<A, B>}${Or<T, U>}`
		: never
	: never;

export type BitOr<X, Y> = Or<X, Y>;
