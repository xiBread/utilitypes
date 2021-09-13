import type { nil } from '../';

/**
 * Ponyfill for [Awaited\<T\>](https://github.com/microsoft/TypeScript/pull/45350)
 * until [TypeScript 4.5](https://github.com/microsoft/TypeScript/issues/45418) releases.
 */
export type Awaited<T> = T extends nil
	? T
	: T extends object
	? T extends { then($: infer S): any }
		? S extends ($: infer U) => any
			? Awaited<U>
			: never
		: T
	: T;
