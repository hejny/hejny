/**
 * Call to action element represents main call to action button in a page.
 * It is not only the link in shape of button, but also element with special role and behavior.
 *
 * Note: For usage look at html sample
 */
class CallToActionElement extends HTMLAnchorElement {
    connectedCallback() {
        let anchor = null;
        const href = this.getAttribute('href');
        const title = this.getAttribute('title');

        if (href && href.startsWith('#') && /^#[a-z0-9-]+$/i.test(href)) {
            anchor = href.substring(1);
        }

        // Note: [🛬] When there is missing or corrupted href, it will be automatically behave as href to contact form
        const isAnchorValid = anchor && document.getElementById(anchor);

        this.addEventListener(
            'click',
            async (event) => {
                if (!isAnchorValid) {
                    console.info(
                        `⏬ Anchor ${anchor ? `#${anchor} is not valid` : `is not defined`}, so scrolling to bottom`,
                        this,
                    );
                    event.preventDefault();
                    event.stopPropagation();

                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth',
                    });
                }

                if (title) {
                    console.info(`🖋 Prefilling conract form with call-to-action title`);

                    const contactFormElement = document.querySelector('form[is="contact-form"]');

                    if (!contactFormElement) {
                        throw new Error(`Cannot find contact form element to prefill with "${title}"`);
                    }

                    const textareaElement = contactFormElement.querySelector('textarea');

                    if (!textareaElement) {
                        throw new Error(`Cannot find textarea in contactform to prefill with "${title}"`);
                    } /* not else */

                    if (textareaElement.value.includes(title)) {
                        textareaElement.value = textareaElement.value
                            .replace('\n\n' + title, '')
                            .replace('\n' + title, '')
                            .replace(title, '');
                    } /* not else */

                    if (textareaElement.value.trim() === '') {
                        textareaElement.value = title;
                    } else {
                        textareaElement.value += `\n\n${title}`;
                    }

                    textareaElement.focus();
                }

                const body = {
                    owner: CUSTOM_ELEMENTS_ENVIRONMENT.author,
                    homeUrl: CUSTOM_ELEMENTS_ENVIRONMENT.homeUrl,
                    realUrl: window.location.href,
                };
                /* const fetchResponse = */ await fetch(
                    `${CUSTOM_ELEMENTS_ENVIRONMENT.webgptUrl}api/custom-elements/call-to-action/track-click`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                    },
                );
            },
            {
                capture: true,
            },
        );
    }
}

console.info('🌟 Defining <call-to-action/>');
customElements.define('call-to-action', CallToActionElement, { extends: 'a' });

/**
 * TODO: [🟦] Call to action auto measurment of clicks - same as in contact form
 * TODO: [🏏] Track (click) actions across all custom elements
 */
