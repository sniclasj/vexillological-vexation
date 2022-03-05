/**
 * @jest-environment jsdom
 */

const {
    game,
    optionGen,
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
describe("optionGen function works correctly", () => {
    beforeAll(() => {
    game.option1 = [];
    optionGen();
});
    test("option1 is generated with a random value from database key", () => {
        expect(game.database.flags).toContain(game.option1);
    });
        test("option2 is generated with a random value from database key", () => {
        expect(game.database.flags).toContain(game.option2);
    });
});

// var value = game.option1;
// var arr = game.database.flags;
// databaseFilt = arr.filter(function(item) {
    // return item !== value});