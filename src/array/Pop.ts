/**
 * Constructs a type by extracting the last element in `T`.
 *
 * @example
 * ```ts
 * type T0 = Pop<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = 5
 * ```
 */
export type Pop<T extends readonly unknown[]> = T extends readonly [...unknown[], infer U] ? U : [];
