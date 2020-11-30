const hey = require('./index.ts');

describe('Index.ts test suit', () => {
  test(`${hey} should exist`, () => {
    expect(hey).toBeDefined();
  });

  test(`${hey} should be a function`, () => {
    expect(typeof hey).toBe('function');
  });
});
