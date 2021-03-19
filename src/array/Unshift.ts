/**
 * Constructs a tuple type by adding `U` to the beginning of `T`.
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
export type Unshift<T extends unknown[], U> = U extends unknown[] ? [...U, ...T] : [U, ...T];
