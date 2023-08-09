import type { ToString } from "../object";
import type { Flat } from "./Flat";

/**
 *
 */
export type Join<T extends unknown[], S extends string = ","> = Flat<T> extends infer U
	? U extends []
		? ""
		: U extends [infer F]
		? `${ToString<F>}`
		: U extends [infer F, ...infer R]
		? `${ToString<F>}${S}${Join<R, S>}`
		: never
	: never;
