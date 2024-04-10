const EXCLUDED_WORDS = ['H-edu', 'h-edu', '<!--', '-->'];

/**
 * Normalize minus as dashes (- U+0014) to propper dashes (– U+2013)
 *
 * @param contentText text with minus as dashes (- U+0014)
 * @returns text with en dashes (– U+2013)
 */
export function normalizeDashes(text: string): string {
    // Replace single dashes with an en dash (–)
    let normalizedText = text.replace(/(?<!^\s*)-/gm, '–');

    // Skip excluded words
    for (const excludedWord of EXCLUDED_WORDS) {
        normalizedText = normalizedText.split(excludedWord.split('-').join('–')).join(excludedWord);
    }

    return normalizedText;
}

/**
 * TODO: ! Also change ... to …
 */
