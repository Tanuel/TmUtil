import {each} from "./each";

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
    each(properties, (key, value) => {
        if (typeof value === "object") {
            each(value, (nestedKey, nestedValue) => {
                el[key][nestedKey] = nestedValue;
            });
        } else {
            el[key] = value;
        }
    });
    return el;
}
