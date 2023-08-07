import type { ToTuple } from "../union";

type $<T, K = keyof T> = T extends unknown[]
	? { [U in keyof T]: [U, T[U]] }
	: ToTuple<K extends keyof T ? [K, Required<T>[K]] : never>;

/**
 * @example
 * ```ts
 * in:
 * type T = Entries<{ a: 1; b: 2; c: 3 }>;
 *
 * out:
 * type T = [["a", 1], ["b", 2], ["c", 3]];
 * ```
 *
 * @example With an array
 * ```ts
 * in:
 * type T = Entries<["a", "b", "c"]>;
 *
 * out:
 * type T = [["0", "a"], ["1", "b"], ["2", "c"]];
 * ```
 */
export type Entries<T> = $<T>;
