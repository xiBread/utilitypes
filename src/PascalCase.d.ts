import type { CamelCase } from '../';

/**
 * Converts the first character of each word in the compound string to an uppercase equivalent.
 */
export type PascalCase<S extends string> = Capitalize<CamelCase<S>>;
