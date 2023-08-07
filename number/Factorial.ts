import { Reverse } from "../array";
import { Multiply, Range } from "./";

type $<T extends number[], M extends number = 1> = T extends [
	infer F extends number,
	...infer R extends number[]
]
	? $<R, Multiply<F, M>>
	: M;

/**
 *
 */
export type Factorial<N extends number> = $<Reverse<Range<1, N, { inclusive: true }>>>;
