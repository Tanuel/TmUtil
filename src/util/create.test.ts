import {create} from "./create";

describe("create", () => {
    test("create without properties", () => {
        const div = create("div");
        expect(div).toBeInstanceOf(HTMLDivElement);
        expect(div).toBeInstanceOf(HTMLElement);

        const btn = create("button");
        expect(btn).not.toBeInstanceOf(HTMLDivElement);
        expect(btn).toBeInstanceOf(HTMLButtonElement);
    });

    test("create with properties", () => {
        const div = create("div", {
            style: {
                display: "block",
                cssFloat: "left"
            },
            className: "create test",
            id: "testid"
        });

        expect(div).toBeInstanceOf(HTMLDivElement);
        expect(div.classList).toContain("create");
        expect(div.classList).toContain("test");
        expect(div.id).toBe("testid");
        expect(div.style.display).toBe("block");
        expect(div.style.cssFloat).toBe("left");
    });

    test("create with generic", () => {
        const div = create<"div">("div");
        expect(div).toBeInstanceOf(HTMLDivElement);
        const btn = create<"button">("button");
        expect(btn).toBeInstanceOf(HTMLButtonElement);

    })
});