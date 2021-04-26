/**
 * Constructs a tuple type by appending `U` to the end of `T`.
 *
 * @example
 * ```ts
 * type T0 = Push<[1, 2, 3], 4>;
 * //	^ = type T0 = [1, 2, 3, 4];
 *
 * type T1 = Push<T0, [5, 6]>;
 * //	^ = type T1 = [1, 2, 3, 4, 5, 6];
 * ```
 */
export type Push<T extends readonly unknown[], U> = U extends readonly unknown[] ? [...T, ...U] : [...T, U];
