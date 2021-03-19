type Extract<T extends string> = T extends `${infer S}:${infer P}/${infer R}`
	? { [K in P | keyof PathParameters<R>]: string }
	: T extends `${infer S}:${infer P}`
	? { [K in P]: string }
	: {};

export type PathParameters<T extends string> = string extends T ? Record<string, string> : Extract<T>;
