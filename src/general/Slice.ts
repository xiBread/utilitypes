import type { Absolute, Join, Length, Sign, Split } from '../';
import type { Indexable } from '../internal';

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
 * Returns a section of `T` from `X` to but not including `Y`.
 * 
 * @example
 * ```ts
 * type Animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 * 
 * type T0 = Slice<'Hello world', 3>;
 * //	^ = type T0 = "lo world"
 * 
 * type T1 = Slice<'Hello world', -5>;
 * //	^ = type T1 = "world"
 * 
 * type T2 = Slice<Animals, 2>;
 * //	^ = type T2 = ["camel", "duck", "elephant"]
 * 
 * type T3 = Slice<Animals, 0, 2>;
 * //	^ = type T3 = ["ant", "bison"]
 * 
 * type T4 = Slice<Animals, -2>;
 * //	^ = type T4 = ["duck", "elephant"]

 * type T5 = Slice<Animals, -4, -1>;
 * //	^ = type T5 = ["bison", "camel", "duck"]
 * ```
 */
export type Slice<T extends Indexable, X extends number = 0, Y extends number = Length<T>> = T extends string
	? Join<Slice<Split<T, ''>, X, Y>, ''>
	: T extends readonly unknown[]
	? T extends readonly [...Start<T, X>, ...infer U, ...End<T, Y>]
		? U
		: []
	: never;
