export * from './mapped-types';
export * from './template-literal-types';
export * from './utility-types';

/**
 * @internal
 */
export type Values<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];

/**
 * @internal
 */
export type ExtendSelf<T, U> = T extends T ? U : never;

/**
 * @internal
 */
export type Separators = '-' | '_' | ' ';
