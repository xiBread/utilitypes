export * from './And';
export * from './If';
export * from './Nand';
export * from './Nor';
export * from './Not';
export * from './Or';
export * from './Xnor';
export * from './Xor';

/**
 * @internal
 */
export type Operands = [[false, false], [false, true], [true, false], [true, true]];
