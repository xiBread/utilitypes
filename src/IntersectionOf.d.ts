export type IntersectionOf<T> = (T extends T ? (x: T) => 0 : never) extends (y: infer U) => 0 ? U : never;
