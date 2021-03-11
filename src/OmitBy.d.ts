import type { Values } from './__internal__';

export type OmitBy<T, U, K extends Values<T, U>> = Omit<T, K>;
