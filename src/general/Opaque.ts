declare const _: unique symbol;

/**
 * Constructs a type by hiding the internal metadata of `T` based on `U`, making `T` incompatible
 * with other types that are seemingly structually identical.
 */
export type Opaque<T, S> = T & { readonly [_]: S };
