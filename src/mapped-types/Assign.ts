type Mapped<T> = { [K in keyof T]: T[K] };

/**
 * Constructs a type with each property in `U` assigned to `T`
 *
 * @example
 * ```ts
 * interface Target {
 * 	a: number;
 * 	b: boolean[];
 * 	c: string;
 * }
 *
 * interface Source {
 * 	c: string[];
 * 	d: bigint;
 * 	e?: 'y' | 'n';
 * }
 *
 * type Assigned = Assign<Target, Source>;
 * //		  ^ = type Assigned = {
 * //			  	a: number;
 * //			  	b: boolean[];
 * //			  	c: string[];
 * //			  	d: bigint;
 * //			  	e?: 'y' | 'n';
 * // 		 	}
 * ```
 */
export type Assign<T, U> = Mapped<Omit<T, Extract<keyof T, keyof U>>> & U;
