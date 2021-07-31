/**
 * Constructs a type by hiding the internal metadata of `T` based on `U`, making `T` incompatible
 * with other types that are seemingly structually identical.
 */
export type Opaque<T, U> = T & { readonly _: U };
