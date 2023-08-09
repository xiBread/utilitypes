export type * from "./IsUnion";

/**
 *
 */
export type Extends<A, B> = If<
	IsNever<B>,
	IsNever<A>,
	(A extends unknown ? A : never) extends B ? true : false
>;

/**
 *
 */
export type IsAny<T> = 0 extends 1 & T ? true : false;

/**
 *
 */
export type IsEqual<A, B> = (<T>() => T extends A ? 1 : 0) extends <T>() => T extends B ? 1 : 0
	? true
	: false;

/**
 *
 */
export type IsFalsy<T> = Extends<T, false | 0 | -0 | 0n | "" | null | undefined>;

/**
 *
 */
export type IsNever<T> = [T] extends [never] ? true : false;

/**
 *
 */
export type IsTruthy<T> = Not<IsFalsy<T>>;

/**
 *
 */
export type IsTuple<T> = T extends readonly unknown[]
	? number extends T["length"]
		? false
		: true
	: false;

// Logic

export type If<P extends boolean, Q, R> = P extends true ? Q : R;

export type Not<P extends boolean> = P extends true ? false : true;

export type Implies<P extends boolean, Q extends boolean> = [P, Q] extends [true, false]
	? false
	: true;

export type And<P extends boolean, Q extends boolean> = [P, Q] extends [true, true] ? true : false;

export type Or<P extends boolean, Q extends boolean> = [P, Q] extends [false, false] ? false : true;

export type Xor<P extends boolean, Q extends boolean> = P extends Q ? false : true;

export type Nand<P extends boolean, Q extends boolean> = Not<And<P, Q>>;

export type Nor<P extends boolean, Q extends boolean> = Not<Or<P, Q>>;

export type Xnor<P extends boolean, Q extends boolean> = Not<Xor<P, Q>>;
