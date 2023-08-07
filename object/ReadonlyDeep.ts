import type { Display, primitive } from "../";
import type { IsOverloaded } from "../function";

type $<T> = {
	readonly [K in keyof T]: ReadonlyDeep<T[K]>;
};

/**
 *
 */
export type ReadonlyDeep<T> = T extends primitive | Date | RegExp
	? T
	: T extends (...args: any[]) => unknown
	? {} extends $<T>
		? T
		: IsOverloaded<T> extends true
		? T
		: ((...args: Parameters<T>) => ReturnType<T>) & $<T>
	: T extends ReadonlyMap<infer K, infer V>
	? {} & ReadonlyMap<ReadonlyDeep<K>, ReadonlyDeep<V>>
	: T extends ReadonlySet<infer U>
	? {} & ReadonlySet<ReadonlyDeep<U>>
	: Display<$<T>>;
