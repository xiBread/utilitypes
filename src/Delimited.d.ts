import type { Split } from '../';
import type { ExtendSelf, Separators } from './__internal__';

/* prettier-ignore */
type Characters =
	| 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
	| 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N'
	| 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U'
	| 'V' | 'W' | 'X' | 'Y' | 'Z';

type Join<T extends unknown[], U extends string, S extends string, D extends string> = T extends [
	`${infer F}`,
	...infer R
]
	? `${F extends U ? D : F extends S ? `${D}${Lowercase<F>}` : F}${Join<R, U, S, D>}`
	: '';

/**
 * Converts a string by delimiting each compound word in `S` by `U`.
 */
export type Delimited<S extends string, U extends string> = ExtendSelf<
	S,
	Join<Split<S, Separators | Characters>, Separators, Characters, U>
>;
