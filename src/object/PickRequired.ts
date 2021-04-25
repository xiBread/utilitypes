type Required<T> = Pick<T, { [P in keyof T]-?: {} extends Pick<T, P> ? never : P }[keyof T]>;

/**
 * Constructs a type by picking `K` that are required from `T`.
 */
export type PickRequired<T, K extends keyof Required<T>> = Pick<T, K>;
