import type { Delimited } from './Delimited';

export type ConstantCase<S extends string> = Uppercase<Delimited<S, '_'>>;
