import type { Values } from './__internal__';

export type PickAllBy<T, U> = Pick<T, Values<T, U>>;
