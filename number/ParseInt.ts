import type { Flat, Tuple } from "../array";

// prettier-ignore
interface HexDigit {
	a: "10"; d: "13";
	b: "11"; e: "14";
	c: "12"; f: "15";
}

type Expand<T extends string, U extends 0[] = []> = `${T}` extends `${U["length"]}`
	? U
	: Expand<T, [...U, 0]>;

type $<T extends string, U extends any[], B extends number> = B extends 10
	? T extends `${infer N extends number}`
		? N
		: never
	: T extends `0x${infer S}`
	? ParseInt<S, 16>
	: T extends `${infer F}${infer R}`
	? F extends keyof HexDigit
		? B extends 16
			? $<R, [...Flat<Tuple<U, B>>, ...Expand<HexDigit[F]>], B>
			: $<R, U, B>
		: $<R, [...Flat<Tuple<U, B>>, ...Expand<F>], B>
	: U["length"];

/**
 * Returns the numeric value of {@link S} in base {@link B}.
 *
 * @remarks
 * - This type can only parse values from `0` to `9999` inclusively.
 * - To stay consistent with the behavior of JavaScript's built-in [parseInt] function,
 * {@link B} will default to `16` if {@link S} starts with `0x` or `0X`; otherwise, it will default to `10`.
 *
 * @template S The string to parse
 * @template B The base to parse in, one of:
 * - `2` - binary
 * - `8` - octal
 * - `10` - decimal
 * - `16` - hexadecimal
 *
 * [parseInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * @example
 * ```ts
 * type Base = 2 | 8 | 10 | 16;
 *
 * declare function parseInt<S extends string, B extends Base = 10>(string: S, base?: B): ParseInt<S, B>;
 *
 * parseInt("00101010", 2); // => 42
 * parseInt("0421", 8);     // => 273
 * parseInt("9999");        // => 9999
 * parseInt("0x1c8b");      // => 7307
 * ```
 */
export type ParseInt<S extends string | number, B extends 2 | 8 | 10 | 16 = 10> = $<
	Lowercase<`${S}`>,
	[],
	B
>;
