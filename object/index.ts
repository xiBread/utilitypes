import type { literal } from "../";
import type { Join } from "../array";
import type { Path } from "./Path";

export type * from "./Entries";
export type * from "./Path";
export type * from "./ReadonlyDeep";

// Native

/**
 * @example
 * ```ts
 * in:
 * type T = Assign<{ a: 1 }, [{ b: 2 }, { c: 3 }]>;
 *
 * out:
 * type T = {
 * 	a: 1;
 * 	b: 2;
 * 	c: 3;
 * }
 * ```
 */
export type Assign<T, U extends unknown[]> = U extends [infer F, ...infer R]
	? Assign<
			{
				[K in keyof T | keyof F]: K extends keyof F
					? F[K]
					: K extends keyof T
					? T[K]
					: never;
			},
			R
	  >
	: T;

/**
 * @example
 * ```ts
 * in:
 * type T = FromEntries<[["a", 1], ["b", 2]]>;
 *
 * out:
 * type T = {
 * 	a: 1;
 * 	b: 2;
 * }
 * ```
 */
export type FromEntries<T extends [PropertyKey, unknown][]> = {
	[U in T[number] as U[0]]: U[1];
};

export type ToString<T> = (
	T extends undefined | null ? (T & {}) | "" : T
) extends infer U extends literal
	? `${U}`
	: T extends unknown[]
	? Join<T>
	: T extends { [Symbol.toStringTag]: infer S extends string }
	? `[object ${string extends S ? "Object" : S}]`
	: never;

// Utility

/**
 *
 */
export interface AbstractClass<T, U extends unknown[] = unknown[]>
	extends AbstractConstructor<T, U> {
	prototype: T;
}

/**
 *
 */
export type AbstractConstructor<T, U extends unknown[] = unknown[]> = abstract new (
	...args: U
) => T;

/**
 *
 */
export interface Class<T, U extends unknown[] = unknown[]> extends Constructor<T, U> {
	prototype: T;
}

/**
 *
 */
export type Constructor<T, U extends unknown[] = unknown[]> = new (...args: U) => T;

export type Dict<T> = Record<string, T>;

/**
 * none or all
 */
export type EitherAll<T> = T | { [K in keyof T]?: never };

/**
 *
 */
export type ExclusiveOr<T, U> =
	| ({ [K in Exclude<keyof T, keyof U>]?: never } & U)
	| ({ [K in Exclude<keyof U, keyof T>]?: never } & T);

/**
 *
 */
export type Get<T, P extends Path<T>> = P extends `${infer K}.${infer R}`
	? K extends keyof T
		? R extends Path<T[K]>
			? Get<T[K], R>
			: never
		: never
	: P extends keyof T
	? T[P]
	: never;

/**
 *
 */
export type InclusiveOr<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
	{
		[U in K]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<U, K>>>;
	}[K];

/**
 *
 */
export type Invert<T extends Record<PropertyKey, any>> = {
	[U in T[keyof T]]: {
		[K in keyof T]: U extends T[K] ? K : never;
	}[keyof T];
};

/**
 *
 */
export type Mutable<T> = { -readonly [K in keyof T]: T[K] };

/**
 * @example
 * ```ts
 * in:
 * type T = OmitIndexSignature<{ a: string; [key: string]: unknown }>;
 *
 * out:
 * type T = {
 * 	a: string;
 * }
 * ```
 */
export type OmitIndexSignature<T> = {
	[K in keyof T as K extends `${infer U}` ? U : never]: T[K];
};

export type OmitStrict<T, K extends keyof T> = Omit<T, K>;

/**
 *
 */
export type ToPrimitive<T> = T extends object
	? T extends (...args: any[]) => unknown
		? Function
		: { [K in keyof T]: ToPrimitive<T[K]> }
	: T extends { valueOf: () => infer R }
	? R
	: T;

/**
 * @example
 * ```ts
 * in:
 * type T = ToUnion<{ a: number; b: string }>;
 *
 * out:
 * type T = { a: number; } | { b: string; };
 * ```
 */
export type ToUnion<T> = T extends object ? { [K in keyof T]: { [U in K]: T[U] } }[keyof T] : never;
