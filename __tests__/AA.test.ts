import { describe, test, expect } from '@jest/globals';
import A from '../AA';

describe('test AAAA', () => {
    test('test it', () => {
      expect(A()).toBe(1);
    });
});