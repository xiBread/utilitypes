/**
 * Returns the absolute value of `N`.
 *
 * @example
 * ```ts
 * type T0 = Absolute<-50>;
 * //	^ = type T0 = "50"
 *
 * type T1 = Absolute<1642>;
 * //	^ = type T1 = "1642"
 */
export type Absolute<N extends number> = `${N}` extends `-${infer T}` ? T : `${N}`;
