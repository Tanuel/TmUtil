import {each} from "./each";

describe("each", () => {
    test("each", () => {
        const testObj = {
            k1: "v1",
            k2: "v2",
            k3: "v3",
        };

        const cb = jest.fn();

        each(testObj, cb);

        expect(cb).toHaveBeenCalledTimes(3);
    });

    test("each with non-enum property", () => {
        const testObj = {
            k1: "v1",
            k2: "v2",
            k3: "v3",
            k4: "k4",
        };

        Object.defineProperty(testObj, "k4", {enumerable: false});

        const cb = jest.fn();
        each(testObj, cb);
        expect(cb).toHaveBeenCalledTimes(3);
    });
});