type Extract<T> = T extends `${infer F}{${infer P}}${infer R}`
	? R extends `/${infer R}`
		? { [K in P | keyof QueryParameters<R>]: string }
		: { [K in P]: string }
	: T extends `${infer F}:${infer P}/${infer R}`
	? { [K in P | keyof QueryParameters<R>]: string }
	: T extends `${infer F}:${infer P}`
	? { [K in P]: string }
	: Record<string, never>;

export type QueryParameters<T extends string> = string extends T ? Record<string, string> : Extract<T>;
