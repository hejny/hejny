import { removeMarkdownComments } from './removeMarkdownComments';

describe('removeMarkdownComments removes markdown comments', () => {
    const input = 'This is a <!-- comment --> test';
    const output = removeMarkdownComments(input);
    expect(output).toBe('This is a  test');
});
