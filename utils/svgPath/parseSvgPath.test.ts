import { parseSvgPath } from './parseSvgPath';

describe('parsing of SVG path', () => {
    it(`parse simple path`, () => {
        expect(
            parseSvgPath(`
                M 1,1
                L 1,1
                L 1,1
            
            `),
        ).toEqual([]);
    });
});
