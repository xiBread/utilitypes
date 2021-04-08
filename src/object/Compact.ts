/**
 * Displays an intersection type as an object when hovering over a symbol.
 *
 * @example
 * ```
 * type Intersection = { a: string } & { b: number };
 *
 * type T0 = Intersection;
 * //	^ = type T0 = {
 * //			a: string;
 * //		} & {
 * //			b: number;
 * //		}
 *
 * type T1 = Compact<Intersection>;
 * //	^ = type T1 = {
 * //			a: string;
 * //			b: number;
 * //		}
 * ```
 */
export type Compact<T> = T extends unknown ? { [K in keyof T]: Compact<T[K]> } : T;
