import type { literal } from "../";
import type { Flat } from "./Flat";

type Stringify<T> = (T extends undefined | null ? (T & {}) | "" : T) extends infer U extends literal
	? `${U}`
	: T extends object
	? "[object Object]"
	: never;

/**
 *
 */
export type Join<T extends unknown[], S extends string = ","> = Flat<T> extends infer U
	? U extends []
		? ""
		: U extends [infer F]
		? `${Stringify<F>}`
		: U extends [infer F, ...infer R]
		? `${Stringify<F>}${S}${Join<R, S>}`
		: never
	: never;
