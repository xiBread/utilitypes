export type IsTuple<T> = T extends unknown[] ? (number extends T['length'] ? false : true) : false;
