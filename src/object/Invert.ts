/**
 * Constructs an object type whose property keys are the values of `T` and whose values are the
 * property keys of `T`.
 *
 * @example
 * ```ts
 * type T0 = Invert<{ 'a': 1, 'b': 2, 'c': 3 }>;
 * //	^ = type T0 = {
 * //			1: "a";
 * //			2: "b";
 * //			3: "c";
 * //		}
 */
export type Invert<T extends Record<PropertyKey, any>> = {
	[V in T[keyof T]]: {
		[K in keyof T]: V extends T[K] ? K : never;
	}[keyof T];
};
