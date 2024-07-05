import { describe, expect, it } from 'vitest';
import { Index } from './index';

describe('Index', () => {
    it('should set the text properly', () => {
        const text = 'text';
        const sut = new Index(text);

        expect(sut.text).toBe(text);
    });
});
