import type { Values } from './__internal__';

export type PickBy<T, U, K extends Values<T, U>> = Pick<T, K>;
