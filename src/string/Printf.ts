type SpecifierMap = {
	a: any;
	b: bigint;
	c: string;
	s: string;
} & {
	[K in "d" | "i" | "u" | "o" | "x" | "f" | "e"]: number;
};

type Specifier<T> = T extends keyof SpecifierMap ? SpecifierMap[T] : never;

/**
 * Constructs a tuple type based on each specifier found in `S`.
 *
 * @example
 * ```ts
 * type T0 = Printf<'%i + %i = %i'>;
 * //	^ type T0 = [number, number, number]
 * ```
 */
export type Printf<S extends string> = S extends `${infer _}%${infer T}${infer R}`
	? [Specifier<T>, ...Printf<R>]
	: S extends `${infer _}%${infer T}`
	? [Specifier<T>]
	: [];
