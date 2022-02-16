/**
 * @jest-environment jsdom
 */

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("correct key exists", () => {
        expect("correct" in game).toBe(true);
    });
});