/**
 * Constructs a function type by appending `U` to the parameters of `T`.
 *
 * @example
 * ```ts
 * type T0 = AppendParameter<(x: number) => number, [y: number]>;
 * //	^ = type T0 = (x: number, y: number) => number
 * ```
 */
export type AppendParameter<T, U extends unknown[]> = T extends (...args: any[]) => unknown
	? (...args: [...Parameters<T>, ...U]) => ReturnType<T>
	: never;
