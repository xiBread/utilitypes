import type { Includes, Invert, ParseInt, RecordOf } from '../';

type Freeze<T, U> = {
	readonly [K in keyof T as Capitalize<K & string>]: number extends U ? ParseInt<T[K] & `${number}`> : K;
};

/**
 * Constructs either a string or numeric enum-like type from `T`.
 *
 * @example
 * ```ts
 * type T0 = EnumOf<['apple', 'orange', 'lemon'], string>;
 * //	^ = type T0 = {
 * //			readonly Apple: "apple";
 * //			readonly Orange: "orange";
 * //			readonly Lemon: "lemon";
 * //		}
 *
 * type T1 = EnumOf<['up', 'down', 'left', 'right']>;
 * //	^ = type T1 = {
 * //			readonly Up: 0;
 * //			readonly Down: 1;
 * //			readonly Left: 2;
 * //			readonly Right: 3;
 * //		}
 * ```
 */
export type EnumOf<T extends readonly unknown[], U extends string | number = number> = Includes<
	[string, number],
	U
> extends true
	? Freeze<Invert<RecordOf<T>>, U>
	: never;
