import type { Delimiter, SplitWith, UppercaseCharacter } from '../';

type Join<T extends unknown[], U extends string> = T extends [`${infer F}`, ...infer R]
	? `${F extends Delimiter ? U : F extends UppercaseCharacter ? `${U}${Lowercase<F>}` : F}${Join<R, U>}`
	: '';

/**
 * Converts a string by delimiting each compound word in `S` by `U`.
 */
export type Delimit<S extends string, U extends string> = string extends U
	? S
	: Join<SplitWith<S, Delimiter | UppercaseCharacter>, U>;
