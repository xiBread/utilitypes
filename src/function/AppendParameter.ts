import type { FunctionLike } from "./";

/**
 * Constructs a function type by appending `U` to the parameters of `T`.
 *
 * @example
 * ```ts
 * type T0 = AppendParameter<(x: number) => number, [y: number]>;
 * //	^ = type T0 = (x: number, y: number) => number
 * ```
 */
export type AppendParameter<T extends FunctionLike, U extends unknown[]> = (
	...args: [...Parameters<T>, ...U]
) => ReturnType<T>;
