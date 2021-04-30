/**
 * Constructs an array type by prepending `U` to `T`.
 *
 * @example
 * ```ts
 * type T0 = Unshift<[1, 2, 3], 0>;
 * //	^ = type T0 = [0, 1, 2, 3];
 *
 * type T1 = Unshift<T0, [-2, -1]>;
 * //	^ = type T1 = [-2, -1, 0, 1, 2, 3];
 * ```
 */
export type Unshift<T extends readonly unknown[], U> = U extends readonly unknown[] ? [...U, ...T] : [U, ...T];
