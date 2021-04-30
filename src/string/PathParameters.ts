type Extract<T> = T extends `${infer F}{${infer P}}${infer R}`
	? R extends `/${infer R}`
		? { [K in P | keyof PathParameters<R>]: string }
		: { [K in P]: string }
	: T extends `${infer F}:${infer P}/${infer R}`
	? { [K in P | keyof PathParameters<R>]: string }
	: T extends `${infer F}:${infer P}`
	? { [K in P]: string }
	: Record<string, never>;

/**
 * Constructs an object type whose property keys are the names of the parameters found in `S` and
 * whose property values are always `string`.
 *
 * @example
 * ```ts
 * type T0 = PathParameters<'/models/{model}/{year}/parts/{part_id}'>;
 * //	^ = type T0 = {
 * //			model: string;
 * //			year: string;
 * //			part_id: string;
 * //		}
 *
 * type T1 = PathParameters<'/topic/:topic/author/:author/:book_id'>;
 * //	^ = type T1 = {
 * // 		    topic: string;
 * // 		    author: string;
 * // 		    book_id: string;
 * // 		}
 * ```
 */
export type PathParameters<S extends string> = string extends S ? Record<string, string> : Extract<S>;
