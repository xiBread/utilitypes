export type If<T, X = true, Y = false> = T extends true ? X : Y;
