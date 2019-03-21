/**
 * Clear all children from a Node.
 * @param node
 */
export function empty<T extends Node>(node: T): T;
export function empty(node: Node): Node {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    return node;
}
