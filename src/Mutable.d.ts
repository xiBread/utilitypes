/**
 * Constructs a type by removing all `readonly` modifiers from each property in `T`.
 */
export type Mutable<T extends object> = { -readonly [K in keyof T]: T[K] };
