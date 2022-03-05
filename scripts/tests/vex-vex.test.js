/**
 * @jest-environment jsdom
 */

const {
    game,
} = require("../vex-vex");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
// Add game keys
describe("game object contains correct keys", () => {
    test("database key exists", () => {
        expect("database" in game).toBe(true);
    });
        test("option1 key exists", () => {
        expect("option1" in game).toBe(true);
    });
});

// Adding values to Option 1
describe("add value to option1", () => {
    test("option1 is populated with a value from database key", () => {
        expect("option1" in game).toBe(game.database.flags[0]);
    });
});