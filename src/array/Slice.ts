import type { Absolute, Sign } from '../';

type Start<T extends readonly unknown[], N extends number, U = T> = Sign<N> extends -1
	? T extends readonly [infer F, ...infer R]
		? R['length'] extends Absolute<N>
			? [F]
			: Start<R, N> extends infer R
			? R extends []
				? []
				: R extends unknown[]
				? [F, ...R]
				: never
			: never
		: []
	: T['length'] extends N
	? T
	: T extends readonly []
	? U
	: T extends readonly [...infer F, unknown]
	? Start<F, N, U>
	: never;

type End<T extends readonly unknown[], N extends number> = T extends readonly [...Start<T, N>, ...infer R] ? R : never;

/**
 * Constructs an array type by selecting each element in `T` from `X` to but not including `Y`.
 * 
 * @example
 * ```ts
 * type Animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 * 
 * type T0 = Slice<Animals, 2>;
 * //	^ = type T0 = ["camel", "duck", "elephant"]
 * 
 * type T1 = Slice<Animals, 0, 2>;
 * //	^ = type T1 = ["ant", "bison"]
 * 
 * type T2 = Slice<Animals, -2>;
 * //	^ = type T2 = ["duck", "elephant"]

 * type T3 = Slice<Animals, -4, -1>;
 * //	^ = type T3 = ["bison", "camel", "duck"]
 */
export type Slice<
	T extends readonly unknown[],
	X extends number = 0,
	Y extends number = T['length']
> = T extends readonly [...Start<T, X>, ...infer U, ...End<T, Y>] ? U : [];
