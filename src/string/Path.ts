type Child<T, K extends keyof T> = Exclude<keyof T[K], keyof PropertyKey[]> & string;

/* prettier-ignore */
type PathString<T, K extends keyof T> = K extends string
	? T[K] extends Record<string, any>
		?
			| `${K}.${PathString<T[K], Child<T, K>>}`
			| `${K}.${Child<T, K>}`
		: never
	: never;

type PathLike<T> = PathString<T, keyof T> | keyof T;

/**
 * Constructs a union type from each deeply nested property in `T`.
 */
export type Path<T> = PathLike<T> extends string | keyof T ? PathLike<T> : keyof T;
