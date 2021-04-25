import type { Not, Or } from '../';

/**
 * Returns `true` if and only if `X` and `Y` are `false`; otherwise, `false`.
 *
 * @example
 * ```ts
 * type T0 = Nor<false, true>;
 * //	^ = type T0 = false
 *
 * type T1 = Nor<false, false>
 * //	^ type T1 = true
 * ```
 */
export type Nor<X extends boolean, Y extends boolean> = Not<Or<X, Y>>;
