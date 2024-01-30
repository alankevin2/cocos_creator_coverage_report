import { describe, test, expect } from '@jest/globals';
import { MySceneMain } from '../MySceneMain';

describe('Math Functions', () => {
    test('canWeTestThis', () => {
      expect(new MySceneMain().canWeTestThis()).toBe(true);
    });
});