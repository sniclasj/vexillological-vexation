/**
 * @jest-environment jsdom
 */

const {
    game,
    optionGen,
    changeIds,
    revertIds,
    playerGuess,
    resetGuess,
    checkAnswer,
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
    test("playerguess key exists", () => {
    expect("playerguess" in game).toBe(true);
    });
    test("usedflags key exists", () => {
    expect("usedflags" in game).toBe(true);
    });
    test("correctscore key exists", () => {
    expect("correctscore" in game).toBe(true);
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

// Tests for applying game.option1 value to HTML
// section with id option1, game.option2 value to
// HTML section with id option 2 and for generating
// a country name in game.question
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
        test("game.question value replaces question id in HTML", () => {
        expect(document.getElementById("question").innerHTML).toBe(game.database.countries[game.database.flags.indexOf(game.question)]);
    });
});

// Tests for reverting section with HTML id of 
// game.option1 value back to "option1", section
// with HTML id of game.option2 value back to "option2"
describe("revertIds function works correctly", () => {
        beforeAll(() => {
        optionGen();
        changeIds();
        revertIds();
        });
// Tests always fails but work perfectly in console so must
// be an issue with the test as opposed to the code?
    test("game.option1 id value is reverted back to option1 id in HTML", () => {
    expect(document.getElementById(game.option1)).toBe("option1");
    });
    test("game.option1 id value is reverted back to option1 id in HTML", () => {
    expect(document.getElementById(game.option2)).toBe("option2");
    });
});

// Test for if playerGuess function works correctly
// Again, test fails but it works correctly in the
// console so must be an issue with how I've written
// my test.
describe("playerGuess function works correctly", () => {
    beforeAll(() => {
        game.option1 = [];
        game.option2 = [];
        game.question = [];
        game.playerguess = [];
        optionGen();
        changeIds();
        playerGuess();
    });
    test("game.playerguess array is populated with flag id of flag option clicked", () => {
        expect(
            game.option1 === game.playerguess ||
            game.option2 === game.playerguess).toBe(true);
    });
});

// Test for if resetGuess function works correctly
describe("resetGuess function works correctly", () => {
    beforeAll(() => {
        game.playerguess = ['wal'];
        resetGuess();
    });
    test("game.playerguess is reset to an empty array", () => {
        expect(game.playerguess).toStrictEqual([]);
    });
});

// Test for if checkAnswer function works correctly
describe("checkAnswer function works correctly", () => {
    beforeAll(() => {
        game.playerguess = ['wal'];
        game.question = 'wal';
        game.usedflags = [];
        game.correctscore = [];
        checkAnswer();
    });
    test("game.usedflags should be populated with game.question value", () => {
        expect(game.usedflags).toStrictEqual(['wal']);
    });
    test("game.correctscore should increment by 1 if player guess is correct", () => {
        expect(game.correctscore).toBe(1);
    });
});