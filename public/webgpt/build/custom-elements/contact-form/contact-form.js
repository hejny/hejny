try {
    /**
     * Contact form element represents main contact form in a page.
     *
     * Note: For usage look at html sample
     */
    class ContactFormElement extends HTMLFormElement {
        connectedCallback() {
            const submitElement = this.querySelector('input[type="submit"]'); /* as HTMLInputElement */

            if (!submitElement) {
                throw new Error('The form does not contain submit button');
            }

            this.addEventListener('submit', async (event) => {
                event.preventDefault();

                const submitElementOriginalValue = submitElement.value;
                submitElement.value = '⏳';

                const responseData = Object.fromEntries(new FormData(this));

                const body = {
                    owner: CUSTOM_ELEMENTS_ENVIRONMENT.author,
                    homeUrl: CUSTOM_ELEMENTS_ENVIRONMENT.homeUrl,
                    realUrl: window.location.href,
                    responseData,
                };

                console.info('[💌]', { responseData, body });

                const fetchResponse = await fetch(
                    `${CUSTOM_ELEMENTS_ENVIRONMENT.webgptUrl}api/custom-elements/contact-form/submit-response`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                    },
                );

                const fetchResponseData = await fetchResponse.json(); /* as SubmitResponseHandlerResponse */

                console.log('[💌]', { fetchResponseData });

                if (!fetchResponseData.isSubmitted) {
                    submitElement.value = submitElementOriginalValue;
                    alert(fetchResponseData.message);
                } else {
                    submitElement.value = '✔️';
                    alert(`Thank you for your message!` /* <- TODO: [🧠] Customize or Translate */);
                    this.reset();
                }
            });
        }
    }

    console.info('🌟 Defining <contact-form/>');
    customElements.define('x-disabled-contact-form', ContactFormElement, { extends: 'form' });
} catch (error) {
    if (
        error.message.includes('has already been declared') ||
        error.message.includes('has already been used with this registry')
    ) {
        // Note: Just ignore this error
    } else {
        throw error;
    }
}

/**
 * TODO: [🏏] Track (click) actions across all custom elements - Form should be recorded both as click action and as form submission
 */
