import type { CamelCase } from '../';

/**
 * Converts the first character of each word in `S` to uppercase.
 *
 * @example
 * ```ts
 * type T0 = PascalCase<'hello_world'>;
 * //	^ = type T0 = "HelloWorld"
 *
 * type T1 = PascalCase<'hello-world'>;
 * //	^ = type T1 = "HelloWorld"
 *
 * type T2 = PascalCase<'hello world'>;
 * //	^ = type T2 = "HelloWorld"
 * ```
 */
export type PascalCase<S extends string> = Capitalize<CamelCase<S>>;
