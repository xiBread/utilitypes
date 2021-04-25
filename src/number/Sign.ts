export type Sign<N extends number> = N extends 0 ? 0 : `${N}` extends `-${infer T}` ? -1 : 1;
