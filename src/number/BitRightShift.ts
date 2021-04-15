type RightShift<N> = N extends `${infer T}${infer U}` ? (T extends '0' | '1' ? `${T}${RightShift<U>}` : never) : never;

export type BitRightShift<N> = `0${RightShift<N>}`;
