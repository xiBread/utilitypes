/**
 * Forces to TypeScript to enforce typechecking of `T` over inferring its literal value.
 *
 * @example
 * ```ts
 * declare function add1<T extends number>(x: T, y: T): T;
 *
 * add1(5, 10);
 * // function add<5 | 10>(x: 5 | 10, y: 5 | 10): 5 | 10
 *
 * declare function add2<T extends number>(x: NoInfer<T>, y: NoInfer<T>): T;
 *
 * add2(5, 10)
 * // function add<number>(x: number, y: number): number
 * ```
 */
export type NoInfer<T extends unknown> = [T][T extends unknown ? 0 : never];
