import { describe, test, expect } from '@jest/globals';

import { MySceneMain } from '../MySceneMain';

describe('Math Functions', () => {
    test('give 1 get \'1\'', () => {
      expect(new MySceneMain().canWeTestThis()).toBe(true);
    });
});