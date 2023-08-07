import type { Join, Slice as ArraySlice, Tuple } from "../array";
import type { Index } from "../internal";
import type { Compare } from "../number";
import type { Length } from "./Length";
import type { Split } from "./Split";

export * from "./Length";
export * from "./Split";

// Native

/**
 *
 */
export type At<T extends string, N extends number> = T[Index<Split<T, "">, N>];

/**
 *
 */
export type EndsWith<S extends string, T extends string, N extends number = Length<S>> = Slice<
	S,
	0,
	N
> extends `${string}${T}`
	? true
	: false;

/**
 *
 */
export type PadEnd<S extends string, N extends number, P extends string = " "> = Length<S> extends N
	? S
	: PadEnd<`${S}${P}`, N, P>;

/**
 *
 */
export type PadStart<
	S extends string,
	N extends number,
	P extends string = " "
> = Length<S> extends N ? S : PadStart<`${P}${S}`, N, P>;

/**
 *
 */
export type Repeat<S extends string, N extends number> = Join<Tuple<S, N>, "">;

/**
 *
 */
export type Replace<
	S extends string,
	T extends string,
	U extends string
> = S extends `${infer F}${T}${infer R}` ? `${F}${U}${R}` : S;

/**
 *
 */
export type ReplaceAll<
	S extends string,
	T extends string,
	U extends string
> = S extends `${infer F}${T}${infer R}` ? ReplaceAll<`${F}${U}${R}`, T, U> : S;

/**
 *
 */
export type Slice<S extends string, A extends number = 0, B extends number = Length<S>> = Join<
	ArraySlice<Split<S, "">, A, B>,
	""
>;

/**
 *
 */
export type StartsWith<S extends string, T extends string, N extends number = 0> = Slice<
	S,
	N
> extends `${T}${string}`
	? true
	: false;

/**
 * @example
 * ```ts
 * in:
 * type T = Trim<"   Hello World   ">;
 *
 * out:
 * type T = "Hello World";
 * ```
 *
 * @example Specifying a string to remove
 * ```ts
 * in:
 * type T = Trim<"___Hello World___", "_">;
 *
 * out:
 * type T = "Hello World";
 * ```
 */
export type Trim<S extends string, T extends string = Whitespace> = TrimStart<TrimEnd<S, T>, T>;

/**
 * @example
 * ```ts
 * in:
 * type T = TrimEnd<"Hello World   ">;
 *
 * out:
 * type T = "Hello World";
 * ```
 *
 * @example Specifying a string to remove
 * ```ts
 * in:
 * type T = TrimEnd<"___Hello World___", "_">;
 *
 * out:
 * type T = "___Hello World";
 * ```
 */
export type TrimEnd<S extends string, T extends string = Whitespace> = S extends `${infer U}${T}`
	? TrimEnd<U>
	: S;

/**
 * @example
 * ```ts
 * in:
 * type T = TrimStart<"   Hello World">;
 *
 * out:
 * type T = "Hello World";
 *
 * @example Specifying a string to remove
 * ```ts
 * in:
 * type T = TrimStart<"___Hello World___", "_">;
 *
 * out:
 * type T = "Hello World___";
 * ```
 * ```
 */
export type TrimStart<S extends string, T extends string = Whitespace> = S extends `${T}${infer U}`
	? TrimStart<U>
	: S;

// Utility

export type LowercaseChar = Split<"abcdefghijklmnopqrstuvwxyz", "">[number];

export type UppercaseChar = Uppercase<LowercaseChar>;

/**
 * @see {@link https://en.wikipedia.org/wiki/Whitespace_character#Unicode | Whitespace characters - Unicode}
 */
// prettier-ignore
export type Whitespace =
	| "\u{0009}" // Horizontal Tab
	| "\u{000A}" // Line Feed
	| "\u{000B}" // Vertical Tab
	| "\u{000C}" // Form Feed
	| "\u{000D}" // Carriage Return
	| "\u{0020}" // Space
	| "\u{0085}" // Next Line
	| "\u{00A0}" // Non-breaking Space
	| "\u{2000}" // En Quad
	| "\u{2001}" // Em Quad
	| "\u{2002}" // En Space
	| "\u{2003}" // Em Space
	| "\u{2004}" // 1/3 Em Space
	| "\u{2005}" // 1/4 Em Space
	| "\u{2006}" // 1/6 Em Space
	| "\u{2007}" // Figure Space
	| "\u{2008}" // Punctuation Space
	| "\u{2009}" // Thin Space
	| "\u{200A}" // Hair Space
	| "\u{2028}" // Line Separator
	| "\u{2029}" // Paragraph Separator
	| "\u{202F}" // Narrow Non-breaking Space
	| "\u{205F}" // Medium Space
	| "\u{3000}" // Ideographic Space
	| "\u{FEFF}" // Zero Width Non-breaking Space
	;

/**
 *
 */
export type Reverse<S extends string> = S extends `${infer F}${infer R}` ? `${Reverse<R>}${F}` : S;

/**
 * @example
 * ```ts
 * in:
 * type T = Truncate<"Hello World", 3>;
 *
 * out:
 * type T = "Hel...";
 * ```
 *
 * @example From the end
 * ```ts
 * in:
 * type T = Truncate<"Hello World", -3>;
 *
 * out:
 * type T = "Hello Wo...";
 * ```
 */
export type Truncate<S extends string, N extends number> = `${Slice<S, 0, N>}...`;
