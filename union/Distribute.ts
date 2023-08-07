import type { IsTuple } from "../boolean";
import type { Digit } from "../number";
import type { ToTuple } from "./";

type Tail<T> = T extends [unknown, ...infer R extends any[]] ? R : never;

type KeyUnion<T> = IsTuple<T> extends true ? `${Digit}${string}` & keyof T : string & keyof T;

type KeyOf<T, K = ToTuple<KeyUnion<T>>> = K extends KeyUnion<T>[] ? K : never;

type Set<T, K extends string, V> = V extends unknown
	? IsTuple<T> extends true
		? { [P in keyof T]: P extends K ? V : T[P] }
		: { [P in K | keyof T]: P extends K ? V : P extends keyof T ? T[P] : never }
	: never;

type Reduce<T, K extends (string & keyof T)[]> = T extends unknown
	? K extends []
		? T
		: Reduce<Set<T, K[0], Distribute<T[K[0]]>>, Tail<K>>
	: never;

/**
 * @example
 * ```ts
 * in:
 * type T0 = Distribute<[1 | 2, "a" | "b"]>;
 * type T1 = Distribute<{ type: 1; value: string | number } | { type: 2; value: boolean }>;
 *
 * out:
 * type T0 = [1, "a"] | [1, "b"] | [2, "a"] | [2, "b"];
 * type T1 =
 * 	| { type: 1; value: string }
 * 	| { type: 1; value: number }
 * 	| { type: 2; value: boolean };
 * ```
 */
export type Distribute<T> = T extends object ? Reduce<T, KeyOf<T>> : T;
