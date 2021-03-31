export type BitLeftShift<N> = N extends `${infer S}${infer T}` ? `${T}0` : never;
