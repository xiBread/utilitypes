type Extract<T> = T extends `${infer F}{${infer P}}${infer R}`
	? R extends `/${infer R}`
		? { [K in P | keyof PathParameters<R>]: string }
		: { [K in P]: string }
	: T extends `${infer F}:${infer P}/${infer R}`
	? { [K in P | keyof PathParameters<R>]: string }
	: T extends `${infer F}:${infer P}`
	? { [K in P]: string }
	: Record<string, never>;

export type PathParameters<T extends string> = string extends T ? Record<string, string> : Extract<T>;
