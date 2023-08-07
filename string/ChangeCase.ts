import { Join } from "../array";
import { ReplaceAll } from "./";
import { Split } from "./Split";

export type CaseType = keyof CaseMap<string>;

interface CaseMap<S extends string> {
	ada: AdaCase<KebabCase<S>>;
	camel: Uncapitalize<PascalCase<S>>;
	cobol: Uppercase<KebabCase<S>>;
	kebab: KebabCase<S>;
	constant: Uppercase<ChangeCase<S, "snake">>;
	pascal: PascalCase<S>;
	snake: ReplaceAll<KebabCase<S>, "-", "_">;
	train: ReplaceAll<ChangeCase<S, "ada">, "_", "-">;
}

type Delimiter = "-" | "_" | " ";

type Inner<T extends unknown[]> = T extends [`${infer F}`, ...infer R]
	? [Capitalize<Lowercase<F>>, ...Inner<R>]
	: T;

type AdaCase<S extends string> = Split<S, Delimiter> extends infer T
	? T extends string[]
		? Capitalize<T["length"] extends 1 ? T[0] : Join<Inner<T>, "_">>
		: never
	: never;

type KebabCase<S extends string> = PascalCase<S> extends `${infer F}${infer R}`
	? R extends Uncapitalize<R>
		? Uncapitalize<`${F}${KebabCase<R>}`>
		: Uncapitalize<`${F}-${KebabCase<R>}`>
	: S;

type PascalCase<S extends string> = ReplaceAll<AdaCase<S>, "_", "">;

export type ChangeCase<S extends string, T extends CaseType> = CaseMap<S>[T];
