/**
 * @jest-environment jsdom
 */

const {
    game,
    optionGen,
    changeIds,
} = require("../vex-vex");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
// Test for existence of game keys
describe("game object contains correct keys", () => {
    test("database key exists", () => {
        expect("database" in game).toBe(true);
    });
    test("option1 key exists", () => {
        expect("option1" in game).toBe(true);
    });
    test("option2 key exists", () => {
        expect("option2" in game).toBe(true);
    });
    test("question key exists", () => {
    expect("question" in game).toBe(true);
    });
});

// Test for generating game.option1 and game.option2
// values from the game.database.flags array.
// Test for game.question to be either the value
// of game.option1 or game.option2
describe("optionGen function works correctly", () => {
    beforeAll(() => {
        game.option1 = [];
        game.option2 = [];
        optionGen();
    });
    test("option1 is generated with a random value from database key", () => {
        expect(game.database.flags).toContain(game.option1);
    });
    test("option2 is generated with a random value from database key", () => {
        expect(game.database.flags).toContain(game.option2);
    });
    //Possible that option1 can be the same as option2
    //Test can provide false passes due to random value generation
    // Code in js file will ensure false passes do not occur
    test("random vaue for option1 != random value for option2", () => {
        expect(game.option1).not.toBe(game.option2);
    });
    // Check if this test is appropriate. It has resolved
    // occasional failed test issue before the test rewrite
    // Credit: https://stackoverflow.com/questions/51519041/jest-matcher-to-match-any-one-of-three-values jordrake
    test("question value is either option1 or option2", () => {
    expect(
        game.option1 === game.question ||
        game.option2 === game.question).toBe(true);
    });
});

// Tests for generating background image associated
// with value generated in game.option1 and game.option2.
// Additionally, test for generating a country name in
// game.question
describe("changeIds function works correctly", () => {
        beforeAll(() => {
        optionGen();
        changeIds();
        });
// Tests always fails but work perfectly in console so must
// be an issue with the test as opposed to the code?
    test("game.option1 value replaces option1 id in HTML", () => {
        expect(document.getElementById("option1")).toBe(game.option1);
    });
        test("game.option2 value replaces option2 id in HTML", () => {
        expect(document.getElementById("option2")).toBe(game.option2);
    });
});