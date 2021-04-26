import type { Tuple } from '../';

type Split<
	S extends string,
	T extends unknown[] = []
> = S extends `${infer $0}${infer $1}${infer $2}${infer $3}${infer $4}${infer $5}${infer $6}${infer $7}${infer $8}${infer $9}${infer R}`
	? Split<R, [...Tuple<unknown, 10>, ...T]>
	: S extends `${infer $0}${infer R}`
	? Split<R, [unknown, ...T]>
	: T;

export type Length<S extends string> = Split<S>['length'];
