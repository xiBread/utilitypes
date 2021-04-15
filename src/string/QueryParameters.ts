type Extract<T extends string> = T extends `${infer S}:${infer P}/${infer R}`
	? { [K in P | keyof QueryParameters<R>]: string }
	: T extends `${infer S}:${infer P}`
	? { [K in P]: string }
	: {};

export type QueryParameters<T extends string> = string extends T ? Record<string, string> : Extract<T>;
