export type If<T, A = true, B = false> = boolean extends T ? A | B : T extends true ? A : B;
