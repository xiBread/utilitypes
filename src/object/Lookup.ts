type KeyBy<T, K> = {
	[P in keyof T]: K extends T[P] ? P : never;
}[keyof T];

export type Lookup<T, K> = Extract<T, { [P in KeyBy<T, K>]: K }>;
