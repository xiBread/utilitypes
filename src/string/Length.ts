import type { Split } from '../';

export type Length<S extends string> = Split<S, ''>['length'];
