import { sayHello } from './index';

describe('Index.ts test suit', () => {
  test(`${sayHello} should exist`, () => {
    expect(sayHello).toBeDefined();
  });

  test(`${sayHello} should be a function`, () => {
    expect(typeof sayHello).toBe('function');
  });
});