import Main from '../src/main';

describe('test main', () => {
  test('version is 1.0.1?', () => {
    const version = Main();
    const x = 'a';
    expect(version).toBe('this version is 1.0.1');
    expect(x).toBe('a');
  });
});
