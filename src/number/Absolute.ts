export type Absolute<N extends number | string> = `${N}` extends `${infer S}${infer T}`
	? S extends '-'
		? T extends `${number}`
			? T
			: never
		: `${N}` extends `${number}`
		? N
		: never
	: never;
