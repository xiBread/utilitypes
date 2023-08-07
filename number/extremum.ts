import type { If } from "../boolean";
import type { Gt, Lt } from "./";

type $Max<N extends number[], M extends number> = N extends [
	infer F extends number,
	...infer R extends number[]
]
	? If<Gt<F, M>, $Max<R, F>, $Max<R, M>>
	: M;

type $Min<N extends number[], M extends number> = N extends [
	infer F extends number,
	...infer R extends number[]
]
	? If<Lt<F, M>, $Min<R, F>, $Min<R, M>>
	: M;

/**
 *
 */
export type Max<N extends number[]> = N extends [] ? -1e999 : $Max<N, N[0]>;

/**
 *
 */
export type Min<N extends number[]> = N extends [] ? 1e999 : $Min<N, N[0]>;

/**
 *
 */
export type MinMax<N extends number[]> = [Min<N>, Max<N>];
