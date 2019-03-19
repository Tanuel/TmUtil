/**
 * Creates a new HTMLElement
 *
 * The generic type is optional and can be omitted
 *
 * @param name - tag name
 * @param properties - properties to be merged into the element
 * @return HTMLElement
 */
export function create<K extends keyof HTMLElementTagNameMap>(name: K, properties?: object): HTMLElementTagNameMap[K];
export function create(name: string, properties: object = {}): HTMLElement {
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
