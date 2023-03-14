const LINKS = {
    Collboard: 'https://collboard.com',
    'H-edu': 'https://h-edu.cz',
    'Czech.events': 'https://czech.events',
};

/**
 * Add links to plain text
 *
 * @param contentText text with keywords to be shown as links
 * @returns text with links in markdown format
 */
export function linkMarkdown(contentText: string): string {
    let contentMarkdown = contentText;

    for (const [word, href] of Object.entries(LINKS)) {
        contentMarkdown = contentMarkdown.split(word).join(`[${word}](${href})`);
    }

    return contentMarkdown;
}
