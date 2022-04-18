/**
 * @jest-environment jsdom
 */

/* jshint esversion: 8 */
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
    let fileContents = fs.readFileSync("vex-vex.html", "utf-8");
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
    test("incorrectscore key exists", () => {
        expect("incorrectscore" in game).toBe(true);
    });
    test("questionnum key exists", () => {
        expect("questionnum" in game).toBe(true);
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
        game.questionnum = [];
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
    test("game.questionnum increments by 1", () => {
        expect(game.questionnum).toBe(1);
    });
    test("question num html value increments 1", () => {
        expect(document.getElementById("question-num").innerHTML).toBe(`Question Number: ` + (game.questionnum));
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