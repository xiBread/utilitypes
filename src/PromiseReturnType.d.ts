import { ExtendSelf } from './__internal__';

type Resolved<T> = T extends Promise<infer U>
	? {
			0: Resolved<U>;
			1: U;
	  }[T extends Promise<unknown> ? 0 : 1]
	: T;

/**
 * Constructs a type consisting of the return type of a `Promise`.
 */
export type PromiseReturnType<T extends (...args: any[]) => Promise<unknown>> = ExtendSelf<T, Resolved<ReturnType<T>>>;
