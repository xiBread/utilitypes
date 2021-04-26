type MapArray<T extends readonly unknown[]> = { [K in { [K in keyof T]: K }[number]]: T[K] };

/**
 * Constructs an object type from either a union or array type.
 *
 * - **Unions:** The object will be a union with each property key and value being a value from the
 * union.
 * - **Arrays:** The object's property keys will be the indices of each element and its values will
 * be the indice's respective element.
 *
 * @example
 * ```
 * type T0 = RecordOf<'a' | 'b' | 'c'>;
 * //	^ = type T0 = {
 * //			a: "a";
 * //		} | {
 * //			b: "b";
 * //		} | {
 * //			c: "c";
 * //		}
 *
 * type T1 = RecordOf<['foo', 'bar', 'baz']>;
 * //	^ = type T1 = {
 * //			0: "foo";
 * //			1: "bar";
 * //			2: "baz";
 * //		}
 * ```
 */
export type RecordOf<T> = T extends PropertyKey
	? { [K in T]: K }
	: T extends readonly PropertyKey[]
	? MapArray<T>
	: T extends Record<PropertyKey, unknown>
	? T
	: never;
