type $<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...$<Exclude<T, K>>] : never;

/**
 *
 */
export type Permutate<T> = T extends unknown[] ? $<T[number]> : $<T>;
