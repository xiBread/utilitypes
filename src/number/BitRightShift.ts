import type { Binary } from './';

type RightShift<N> = N extends `${infer T}${infer U}` ? (T extends Binary ? `${T}${RightShift<U>}` : never) : never;

export type BitRightShift<N> = `0${RightShift<N>}`;
