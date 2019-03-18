/**
 * Creates a new HTMLElement
 * @param name - tag name
 * @param properties - properties to be merged into the element
 * @return HTMLElement
 */
function create<T extends HTMLElement = HTMLElement>(name: string, properties: object = {}): T {
        return {...document.createElement(name), ...properties} as T;
}

export {create};
