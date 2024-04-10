import { describe, expect, it } from '@jest/globals';
import spaceTrim from 'spacetrim';

import { normalizeDashes } from './normalizeDashes';

describe('normalizeDashes', () => {
    it(`keeps dashless text`, () => {
        expect(normalizeDashes(`foo bar`)).toBe(`foo bar`);
    });

    it(`normalizes one dash`, () => {
        expect(normalizeDashes(`script-processing`)).toBe(`script–processing`);
    });

    it(`normalizes multiple dashes`, () => {
        expect(normalizeDashes(`content-aware script-processing`)).toBe(`content–aware script–processing`);
    });

    it(`skip excluded words`, () => {
        expect(normalizeDashes(`H-edu script-processing`)).toBe(`H-edu script–processing`);
    });

    it(`skip markdown lists words`, () => {
        expect(
            normalizeDashes(
                spaceTrim(`
                    The Foo-bar principle:

                    - Foo
                    - Bar
                `),
            ),
        ).toBe(
            spaceTrim(`
                The Foo–bar principle:

                - Foo
                - Bar
            `),
        );
    });

    it(`skip markdown lines`, () => {
        expect(
            normalizeDashes(
                spaceTrim(`
                    Foo-foo

                    ---

                    Bar
                `),
            ),
        ).toBe(
            spaceTrim(`
                    Foo–foo

                    ---
                    
                    Bar
            `),
        );
    });

    it(`skip comments`, () => {
        expect(
            normalizeDashes(
                spaceTrim(`
                    Foo-foo
                    <!--Hello-->
                `),
            ),
        ).toBe(
            spaceTrim(`
                    Foo–foo
                    <!--Hello-->
            `),
        );
    });
});
