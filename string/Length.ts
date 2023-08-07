import type { Tuple } from "../array";

type $<
	S extends string,
	T extends 0[] = []
> = S extends `${infer _0}${infer _1}${infer _2}${infer _3}${infer _4}${infer _5}${infer _6}${infer _7}${infer _8}${infer _9}${infer R}`
	? $<R, [...Tuple<0, 10>, ...T]>
	: S extends `${infer _0}${infer R}`
	? $<R, [0, ...T]>
	: T;

/**
 *
 */
export type Length<S extends string> = $<S>["length"];
