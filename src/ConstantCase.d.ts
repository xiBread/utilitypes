import type { Delimited } from './Delimited';

/**
 * Converts each character in the string to the uppercase version and delimits each word in the
 * compound string with an underscore.
 */
export type ConstantCase<S extends string> = Uppercase<Delimited<S, '_'>>;
