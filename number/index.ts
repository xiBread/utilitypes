import type * as Math from "ts-arithmetic";
import type { If, Not } from "../boolean";
import type { Range } from "./Range";

export type * from "./extremum";
export type * from "./Bit";
export type * from "./Factorial";
export type * from "./IsPrime";
export type * from "./Range";

// Native

/**
 *
 */
export type IsFloat<N extends number> = Not<IsInteger<N>>;

/**
 *
 */
export type IsInteger<N extends number> = [false, true][Math.IsInt<N>];

// Utility

/**
 *
 */
export type Add<X extends number, Y extends number> = Math.Add<X, Y>;

/**
 *
 */
export type Absolute<N extends number> = number extends N
	? never
	: `${N}` extends `-${infer T extends number}`
	? T
	: N;

export type Ceil<N extends number> = If<IsInteger<N>, N, Add<Floor<N>, 1>>;

/**
 *
 */
export type Compare<X extends number, Y extends number> = Math.Compare<X, Y>;

/**
 *
 */
export type Digit = Range<0, 10>[number];

/**
 *
 */
export type Divide<X extends number, Y extends number> = Math.Divide<X, Y>;

/**
 *
 */
export type DivMod<X extends number, Y extends number> = [Divide<X, Y>, Modulo<X, Y>];

/**
 *
 */
export type Eq<X extends number, Y extends number> = Compare<X, Y> extends 0 ? true : false;

/**
 *
 */
export type Floor<N extends number> = If<
	IsInteger<N>,
	N,
	`${N}` extends `${infer I extends number}.${string}` ? I : N
>;

/**
 *
 */
export type Gt<X extends number, Y extends number> = Compare<X, Y> extends 1 ? true : false;

/**
 *
 */
export type Gte<X extends number, Y extends number> = Math.GtOrEq<X, Y> extends 1 ? true : false;

/**
 *
 */
export type IsEven<N extends number> = [true, false][Math.IsEven<N>];

/**
 *
 */
export type IsNegative<N extends number> = `${N}` extends `-${number}` ? true : false;

/**
 *
 */
export type IsOdd<N extends number> = Not<IsEven<N>>;

/**
 *
 */
export type IsPositive<N extends number> = Not<IsNegative<N>>;

/**
 *
 */
export type Lt<X extends number, Y extends number> = Compare<X, Y> extends -1 ? true : false;

/**
 *
 */
export type Lte<X extends number, Y extends number> = Compare<X, Y> extends -1 ? true : false;

/**
 *
 */
export type Modulo<X extends number, Y extends number> = Math.Mod<X, Y>;

/**
 *
 */
export type Multiply<X extends number, Y extends number> = Math.Multiply<X, Y>;

/**
 *
 */
export type Negate<N extends number> = Math.Negate<N>;

/**
 * @template B Base
 * @template N Exponent
 */
export type Pow<B extends number, N extends number> = Math.Pow<B, N>;

/**
 *
 */
export type Sign<N extends number> = `${N}` extends `-${number}` ? -1 : N extends 0 ? 0 : 1;

/**
 *
 */
export type Subtract<X extends number, Y extends number> = Math.Subtract<X, Y>;

/**
 * @example
 * ```ts
 * in:
 * type T = ToDigits<12345>;
 *
 * out:
 * type T = [1, 2, 3, 4, 5];
 * ```
 */
export type ToDigits<N extends number> = `${N}` extends infer S extends string
	? S extends ""
		? []
		: S extends `${infer F extends Digit}${infer R}`
		? R extends ""
			? [F]
			: R extends `${infer T extends number}`
			? [F, ...ToDigits<T>]
			: never
		: never
	: never;
