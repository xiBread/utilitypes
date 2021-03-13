import type { Delimited } from './Delimited';

/**
 * Converts each character in the string to the uppercase version and delimits each word in the
 * compound string with an underscore.
 *
 * @example
 * ```ts
 * type T0 = ConstantCase<'hello_world'>;
 * //	^ = type T0 = 'HELLO_WORLD'
 *
 * type T1 = ConstantCase<'hello-world'>;
 * //	^ = type T1 = 'HELLO_WORLD'
 *
 * type T2 = ConstantCase<'hello world'>;
 * //	^ = type T2 = 'HELLO_WORLD'
 * ```
 */
export type ConstantCase<S extends string> = Uppercase<Delimited<S, '_'>>;
