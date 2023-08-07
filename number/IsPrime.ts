import type { If } from "../boolean";
import type { Eq, Modulo, Range } from "./";

type $<N extends number, T extends number[]> = T extends [
	infer F extends number,
	...infer R extends number[]
]
	? If<Eq<Modulo<N, F>, 0>, false, $<N, R>>
	: true;

/**
 *
 */
export type IsPrime<N extends number> = N extends 1 ? false : $<N, Range<2, N>>;
