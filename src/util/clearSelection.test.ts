import {clearSelection} from "./clearSelection";

// TODO Improve this test

describe("clearSelection", () => {

    test("clearSelection empty", () => {
        (window as any).getSelection = () => {
            return {
                empty: () => {
                }
            };
        };
        expect(clearSelection).not.toThrow();
    });

    test("clearSelection removeAllRanges", () => {
        (window as any).getSelection = () => {
            return {
                removeAllRanges: () => {
                }
            };
        };
        clearSelection();
        expect(clearSelection).not.toThrow();
    });
});