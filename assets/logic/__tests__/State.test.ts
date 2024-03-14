import { describe, test, expect } from '@jest/globals';
import { State } from "../State";

describe('Math Functions', () => {
  test('give 1 get \'1\'', () => {
    expect(new State().test(1)).toBe('1');
  });

  test('give 2 get \'3\'', () => {
    expect(new State().test(2)).toBe('2');
  });

  test('give 3 get \'3\'', () => {
    expect(new State().test(3)).toBe('3');
  });

  // test('give 4 get \'4\'', () => {
  //     expect(new State().test(4)).toBe('4');
  // });


  test('give any number but 1 or 2 or 3 get -1', () => {
    expect(new State().test(9999)).toBe('-1')
  });
});
