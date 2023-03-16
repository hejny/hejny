import emoji1F680 from 'openmoji/color/svg/1F680.svg';
import emoji1F92F from 'openmoji/color/svg/1F92F.svg';

console.log({ emoji1F680, emoji1F92F });

type EmojiMap = { [emoji: string]: string };

const EMOJI_MAP: EmojiMap = {
    '🚀': emoji1F680.src,
    '🤯': emoji1F92F.src,
};

/**
 * Replaces emojis in an HTMLElement with images from openmoji
 * @param {HTMLElement | null} node - The HTMLElement to emojify.
 */
export function emojifyRef(element: HTMLElement | null) {
    if (!element) {
        return;
    }

    console.log('emojifyRef');
    let html = element.innerHTML;

    for (const [emoji, src] of Object.entries(EMOJI_MAP)) {
        html = html
            .split(emoji)
            .join(
                `<img src="${src}" alt="${emoji}" style="display: inline;width: 2em;height: 2em;vertical-align: center;"/>`,
            );
    }

    element.innerHTML = html;
}
