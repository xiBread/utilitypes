import type { IsTuple, Range, Tail, TupleOf } from '../';

type KeyUnion<T> = IsTuple<T> extends true ? `${Range<0, 9>}${string}` & keyof T : string & keyof T;

type KeyOf<T, K = TupleOf<KeyUnion<T>>> = K extends KeyUnion<T>[] ? K : never;

type Assign<T, K extends string, V> = V extends unknown
	? IsTuple<T> extends true
		? {
				[P in keyof T]: P extends K ? V : T[P];
		  }
		: {
				[P in K | keyof T]: P extends K ? V : P extends keyof T ? T[P] : never;
		  }
	: never;

type Reduce<T, K extends (string & keyof T)[]> = T extends unknown
	? K extends []
		? T
		: Reduce<Assign<T, K[0], Distribute<T[K[0]]>>, Tail<K>>
	: never;

/**
 * Constructs a union type of all possible types of permitted shapes that don't contain any unions
 * from `T`.
 *
 * @example
 * ```ts
 * type T0 = Distribute<[1 | 2, 'a' | 'b']>;
 * //	^ = type T0 = [2, "a"] | [2, "b"] | [1, "a"] | [1, "b"]
 *
 * type T1 = Distribute<{ a: 1; b: 'foo' | 'bar' } | { a: 2; b: 'baz' }>;
 * //	^ = type T1 = {
 * 			    a: 1;
 * 			    b: "foo";
 * 			} | {
 * 			    a: 1;
 * 			    b: "bar";
 * 			} | {
 * 			    a: 2;
 * 			    b: "baz";
 * 			}
 * ```
 */
export type Distribute<T> = T extends object ? Reduce<T, KeyOf<T>> : T;
