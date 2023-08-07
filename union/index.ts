/**
 * @example
 * ```ts
 * in:
 * type T = Difference<1 | 2 | 3, 2 | 3 | 4>;
 *
 * out:
 * type T = 1;
 * ```
 */
export type Difference<T, U> = Exclude<T, T & U>;

/**
 * @example
 * ```ts
 * in:
 * type T = Disjunctive<1 | 2 | 3, 3 | 4>;
 *
 * out:
 * type T = 1 | 2 | 4;
 * ```
 */
export type Disjunctive<T, U> = Exclude<T | U, T & U>;

export type ExcludeStrict<T, U extends T> = Exclude<T, U>;

export type ExtractStrict<T, U extends T> = Extract<T, U>;

/**
 * @example
 * ```ts
 * in:
 * type T = Last<"a" | "b" | "c">;
 *
 * out:
 * type T = "c";
 * ```
 */
export type Last<T> = ToIntersection<T extends unknown ? () => T : never> extends () => infer U
	? U
	: never;

/**
 *
 */
export type Literal<T extends string> = T | (string & {});

/**
 * @example
 * ```ts
 * in:
 * type T = ToIntersection<{ a: 1 } | { b: 2 }>;
 *
 * out:
 * type T = {
 * 	a: 1;
 * 	b: 2;
 * }
 * ```
 */
export type ToIntersection<T> = (T extends T ? (_: T) => 0 : never) extends (_: infer U) => 0
	? U
	: never;

/**
 * @example
 * ```ts
 * in:
 * type T = ToTuple<1 | 2 | 3>;
 *
 * out:
 * type T = [1, 2, 3];
 * ```
 */
export type ToTuple<T> = [T] extends [never] ? [] : [...ToTuple<Exclude<T, Last<T>>>, Last<T>];
