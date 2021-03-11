/* prettier-ignore */
type PathString<T, K extends keyof T> = K extends string
	? T[K] extends Record<string, any>
		?
			| `${K}.${PathString<T[K], Exclude<keyof T[K], keyof any[]>> & string}`
			| `${K}.${Exclude<keyof T[K], keyof any[]> & string}`
		: never
	: never;

type PathLike<T> = PathString<T, keyof T> | keyof T;

export type Path<T> = PathLike<T> extends string | keyof T ? PathLike<T> : keyof T;
