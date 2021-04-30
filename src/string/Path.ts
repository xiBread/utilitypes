type Child<T, K extends keyof T> = Exclude<keyof T[K], keyof PropertyKey[]> & string;

type PathString<T, K extends keyof T> = K extends string
	? T[K] extends Record<string, any>
		? `${K}.${PathString<T[K], Child<T, K>>}` | `${K}.${Child<T, K>}`
		: never
	: never;

type PathLike<T> = PathString<T, keyof T> | keyof T;

/**
 * Constructs a type from each deeply nested property in `T`.
 *
 * @example
 * ```ts
 * interface Nested {
 * 	a: string;
 * 	b: {
 * 		c: number;
 * 		d: {
 * 			e: boolean;
 * 		}
 * 	}
 * 	f: number[];
 * }
 *
 * type T0 = Path<Nested>;
 * //	^ = type T0 = keyof Nested | "b.d.e" | "b.c" | "b.d"
 * ```
 */
export type Path<T> = PathLike<T> extends string | keyof T ? PathLike<T> : keyof T;
