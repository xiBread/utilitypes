export type * from "./Curry";

/**
 *
 */
export type Action<T extends unknown[] = unknown[]> = (...args: T) => void;

/**
 *
 */
export type Awaitable<T> = T | Promise<T> | PromiseLike<T>;

/**
 *
 */
export type Fn<T extends unknown[] = unknown[], R = unknown> = (...args: T) => R;

export type IsOverloaded<T extends Fn> = T extends {
	(...args: infer U): unknown;
	(...args: unknown[]): unknown;
}
	? unknown[] extends U
		? false
		: true
	: false;

/**
 *
 */
export type NoInfer<T> = [T][T extends unknown ? 0 : never];

/**
 *
 */
export type Predicate<T extends unknown[] = unknown[]> = (...args: T) => boolean;
