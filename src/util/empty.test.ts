import {empty} from "./empty";

describe("empty", () => {
    test("empty", () => {
        const el = document.createElement("div");

        el.appendChild(document.createElement("div"));
        el.appendChild(document.createElement("div"));

        //go sure that element actually has child nodes (this is probably useless)
        expect(el.hasChildNodes()).toBe(true);
        const ret = empty(el);
        // check if function returns same instance
        expect(ret).toBe(el);

        //check that the element doesn't have child nodes anymore
        expect(el.hasChildNodes()).toBe(false);
    });
});