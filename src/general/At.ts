import type { Absolute, ParseInt, Sign, Split, Subtract } from '../';
import type { Indexable } from '../internal';

export type At<T extends Indexable, N extends number> = T extends readonly unknown[]
	? N extends Absolute<N>
		? T[N]
		: Sign<N> extends -1
		? Subtract<T['length'], ParseInt<`${Absolute<N>}`>> extends infer U
			? T[U & number]
			: never
		: never
	: T extends string
	? At<Split<T, ''>, N>
	: never;
