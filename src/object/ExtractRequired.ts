/**
 * Constructs a type consisting of all properties of `T` that are required.
 *
 * @example
 * ```ts
 * interface Info {
 * 	name: string;
 * 	age: number;
 * 	hairColor?: string;
 * 	eyeColor?: string;
 * }
 *
 * type Important = ExtractRequired<Info>;
 * //	^ = type Important = {
 * //			name: string;
 * //			age: number;
 * //		}
 * ```
 */
export type ExtractRequired<T> = Pick<T, { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T]>;
