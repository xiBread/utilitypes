import { Binary } from './';

type And<X, Y> = [X, Y] extends ['0', '0'] | ['0', '1'] | ['1', '0']
	? '0'
	: [X, Y] extends ['1', '1']
	? '1'
	: [X, Y] extends [`${infer A}${infer T}`, `${infer B}${infer U}`]
	? [A, B] extends [Binary, Binary]
		? `${And<A, B>}${And<T, U>}`
		: never
	: never;

export type BitAnd<X, Y> = And<X, Y>;
