import type { Delimit } from '../';

/**
 * Converts each word in `S` to uppercase and each space is replaced by an underscore.
 *
 * @example
 * ```ts
 * type T0 = ConstantCase<'hello_world'>;
 * //	^ = type T0 = "HELLO_WORLD"
 *
 * type T1 = ConstantCase<'hello-world'>;
 * //	^ = type T1 = "HELLO_WORLD"
 *
 * type T2 = ConstantCase<'hello world'>;
 * //	^ = type T2 = "HELLO_WORLD"
 * ```
 */
export type ConstantCase<S extends string> = Uppercase<Delimit<S, '_'>>;
