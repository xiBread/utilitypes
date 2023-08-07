export type Bit = 0 | 1;

export namespace Bit {
	export type Not<A extends Bit> = A extends 1 ? 0 : 1;

	export type And<A extends Bit, B extends Bit> = [A, B] extends [1, 1] ? 1 : 0;

	export type Or<A extends Bit, B extends Bit> = [A, B] extends [0, 0] ? 0 : 1;

	export type Xor<A extends Bit, B extends Bit> = A extends B ? 0 : 1;

	export type Nand<A extends Bit, B extends Bit> = Not<And<A, B>>;

	export type Nor<A extends Bit, B extends Bit> = Not<Or<A, B>>;

	export type Xnor<A extends Bit, B extends Bit> = Not<Xor<A, B>>;

	export type Flip<N extends Bit[]> = N extends [infer F extends Bit, ...infer R extends Bit[]]
		? [Not<F>, ...Flip<R>]
		: [];
}
