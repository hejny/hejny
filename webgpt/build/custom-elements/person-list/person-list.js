/**
 * Person list element is used to display list of persons.
 * For example list of team members, references, etc.
 */
class PersonList extends HTMLElement {}

/**
 * Person item element is one person in the list.
 *
 * Note: [🦀] Links will be added automatically from linklist
 * Note: This element must be a direct child of <person-list/>
 * Note: Inside <person-item/> you can use <person-avatar/>, <person-name/>, <person-title/>, <person-description/>
 *       Do not use other elements directly
 */
class PersonItem extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('person-list');
    }
}

/**
 * Person avatar element is used to display person avatar / profile picture
 *
 * Note: This element must be a direct child of <person-item/>
 * Note: Use <img/> element inside <person-avatar/> to display the image
 */
class PersonAvatar extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('person-item');
    }
}

/**
 * Person name element is used to display person name
 *
 * @example <person-name>John Doe</person-name>
 * @example <person-name>WebGPT customer</person-name>
 *
 * Note: This element must be a direct child of <person-item/>
 * Note: Use only once inside <person-item/>
 */
class PersonName extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('person-item');
        // [🩱]> this.assertsToBeOnlySiblingOfItsKind();
    }
}

/**
 * Person title element is used to display person title
 *
 * @example <person-title>CEO</person-title>
 * @example <person-title>Cool person</person-title>
 *
 * Note: Use after <person-name/> element
 * Note: This element must be a direct child of <person-item/>
 * Note: Use only as many times as you want inside <person-item/>
 */
class PersonTitle extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('person-item');
        // [🩱]> this.assertsToBeYoungerSiblingOf('person-name');
    }
}

/**
 * Person description element is used to display person description
 * It is used to display short description of the person.
 *
 * @example <person-description>John is a cool person.</person-description>
 * @example <person-description>WebGPT customer since 2020.</person-description>
 *
 * Note: Use after <person-title/> element
 * Note: This element must be a direct child of <person-item/>
 */
class PersonDescription extends HTMLElement {
    connectedCallback() {
        // [🩱]> this.assertsToBeDirectChildOf('person-item');
        // [🩱]> this.assertsToBeYoungerSiblingOf('person-title');
        // [🩱]> this.assertsToBeOnlySiblingOfItsKind();
    }
}

console.info(
    '🌟 Defining <person-list/>, <person-item/>, <person-avatar/>, <person-name/>, <person-title/>, <person-description/>',
);
customElements.define('person-list', PersonList);
customElements.define('person-item', PersonItem);
customElements.define('person-avatar', PersonAvatar);
customElements.define('person-name', PersonName);
customElements.define('person-title', PersonTitle);
customElements.define('person-description', PersonDescription);
