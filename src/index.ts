export * from './aliases';
export * from './array';
export * from './common';
export * from './function';
export * from './logical';
export * from './number';
export * from './object';
export * from './string';
export * from './union';

/**
 * @internal
 */
export type ExtendSelf<T, U> = T extends T ? U : never;
