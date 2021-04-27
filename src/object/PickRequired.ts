import type { ExtractRequired } from '../';

/**
 * Constructs a type by picking `K` that are required from `T`.
 */
export type PickRequired<T, K extends keyof ExtractRequired<T>> = Pick<T, K>;
