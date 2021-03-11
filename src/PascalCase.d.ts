import type { CamelCase } from '../';

export type PascalCase<S extends string> = Capitalize<CamelCase<S>>;
