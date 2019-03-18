/**
 * Creates a new HTMLElement
 * @param name - tag name
 * @param properties - properties to be merged into the element
 * @return HTMLElement
 */
function create<K extends keyof HTMLElementTagNameMap>(name: K, properties?: object): HTMLElementTagNameMap[K];
function create(name: string, properties: object = {}): HTMLElement {
    const el = document.createElement(name);
    Object.entries(properties).forEach(([key, value]: [string, any]) => {
        if (typeof value === "object") {
            Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                el[key][nestedKey] = nestedValue;
            });
        } else {
            el[key] = value;
        }
    });
    return el;
}

export {create};
