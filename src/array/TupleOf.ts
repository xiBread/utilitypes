import type { LastType } from '../union/LastType';
import type { Push } from './Push';

/**
 * Constructs a tuple type from each member in a union type.
 *
 * @example
 * ```ts
 * type T0 = TupleOf<'a' | 'b' | 'c'>;
 * //	^ = type T0 = ["a", "b", "c"]
 * ```
 */
export type TupleOf<T> = [T] extends [never] ? [] : Push<TupleOf<Exclude<T, LastType<T>>>, LastType<T>>;
