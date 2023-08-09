import type { Extends, If, IsEqual } from "../boolean";
import type { Index } from "../internal";
import type { Add } from "../number";

export type * from "./Chunk";
export type * from "./Fill";
export type * from "./Flat";
export type * from "./Join";
export type * from "./Slice";
export type * from "./Tuple";
export type * from "./Unique";

// Native

/**
 *
 */
export type At<T extends unknown[], N extends number> = T[Index<T, N>];

/**
 *
 */
export type Entries<T extends unknown[]> = {
	[K in keyof T]: [K extends `${infer U extends number}` ? U : never, T[K]];
};

/**
 *
 */
export type Every<T extends unknown[], U> = T extends [infer F, ...infer R]
	? If<Extends<F, U>, Every<R, U>, false>
	: true;

/**
 *
 */
export type Filter<T extends unknown[], U> = T extends [infer F, ...infer R]
	? If<Extends<F, U>, [F, ...Filter<R, U>], Filter<R, U>>
	: [];

/**
 *
 */
export type Includes<T extends unknown[], U> = T extends [infer F, ...infer R]
	? If<IsEqual<F, U>, true, Includes<R, U>>
	: false;

/**
 *
 */
export type IndexOf<T extends unknown[], U, N extends number = 0> = T extends [infer F, ...infer R]
	? If<IsEqual<F, U>, N, IndexOf<R, U, Add<N, 1>>>
	: -1;

/**
 *
 */
export type Pop<T extends unknown[]> = T extends [...unknown[], infer U] ? U : never;

/**
 *
 */
export type Push<T extends unknown[], U extends unknown[]> = [...T, ...U];

/**
 *
 */
export type Shift<T> = T extends [infer U, ...unknown[]] ? U : never;

/**
 *
 */
export type Some<T extends unknown[], U> = T extends [infer F, ...infer R]
	? If<Extends<F, U>, true, Some<R, U>>
	: false;

/**
 *
 */
export type Unshift<T extends unknown[], U extends unknown[]> = [...U, ...T];

// Utility

/**
 *
 */
export type ArrayType<T extends unknown[]> = T extends (infer U)[] ? U : never;

/**
 *
 */
export type Partition<T extends unknown[], U> = [Filter<T, U>, Reject<T, U>];

/**
 *
 */
export type Reject<T extends unknown[], U> = T extends [infer F, ...infer R]
	? If<Extends<F, U>, Reject<R, U>, [F, ...Reject<R, U>]>
	: [];

/**
 * @example
 * ```ts
 * in:
 * type T = Reverse<[1, 2, 3]>;
 *
 * out:
 * type T = [3, 2, 1];
 */
export type Reverse<T extends unknown[]> = T extends [infer F, ...infer R]
	? [...Reverse<R>, F]
	: [];

// Utility

export type TypedArray =
	| Int8Array
	| Uint8Array
	| Uint8ClampedArray
	| Int16Array
	| Uint16Array
	| Int32Array
	| Uint32Array
	| Float32Array
	| Float64Array
	| BigInt64Array
	| BigUint64Array;

/**
 *
 */
export type Head<T extends unknown[]> = T extends [...infer U, unknown] ? U : never;

/**
 *
 */
export type Tail<T extends unknown[]> = T extends [unknown, ...infer U] ? U : never;
