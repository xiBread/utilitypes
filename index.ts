import type { Fn } from "./function";

export * as A from "./array";
export * as Arr from "./array";
export * as Array from "./array";
export * as B from "./boolean";
export * as Bool from "./boolean";
export * as Boolean from "./boolean";
export * as F from "./function";
export * as Func from "./function";
export * as Function from "./function";
export * as N from "./number";
export * as Num from "./number";
export * as Number from "./number";
export * as O from "./object";
export * as Obj from "./object";
export * as Object from "./object";
export * as S from "./string";
export * as Str from "./string";
export * as String from "./string";

/**
 *
 */
export type json = string | number | boolean | null | json[] | { [key: string]: json };

/**
 *
 */
export type literal = string | number | boolean | bigint | undefined | null;

/**
 *
 */
export type primitive = literal | symbol;

export type Cast<T, U> = T extends U ? T : U;

/**
 * @example
 * ```ts
 * in:
 * type T = Display<{ a: number; } & { b: string; }>;
 *
 * out:
 * type T = {
 * 	a: number;
 * 	b: string;
 * }
 * ```
 */
export type Display<T> = T extends Fn ? T : { [K in keyof T]: Display<T[K]> } & {};

declare const K: unique symbol;

/**
 *
 */
export type Nominal<T, S> = T & { readonly [K]: S };
