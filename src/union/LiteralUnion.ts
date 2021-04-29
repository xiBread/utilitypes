/**
 * A type-safe version of literal unions that allows IntelliSense to provide autocompletion for `T`
 * while also allowing `U`.
 *
 * @example
 * ```ts
 * type T0 = 'foo' | 'bar'
 *
 * const x: T0 | string = ' ';
 * //					  ^ Nothing
 *
 * const y: LiteralUnion<T0> = ' ';
 * //						   ^ foo
 * //							 bar
 * //							 <string>
 * ```
 */
export type LiteralUnion<T extends U, U = string> = T | (Pick<U, never> & { $?: never });
