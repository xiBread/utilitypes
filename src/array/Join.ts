import type { LiteralPrimitive } from '../';

type Concat<T extends unknown[], S extends string, H extends LiteralPrimitive = ''> = T extends [infer F, ...infer R]
	? F extends LiteralPrimitive
		? `${H}${Concat<R, S, R extends [] ? F : `${F}${S}`>}`
		: never
	: H;

export type Join<T extends unknown[], S extends string = ','> = Concat<T, S> extends infer U ? U : never;
