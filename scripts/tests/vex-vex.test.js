/**
 * @jest-environment jsdom
 */

const {
    game,
    newGame,
    startGame
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
    test("correct key exists", () => {
        expect("correct" in game).toBe(true);
    });
    test("incorrect key exists", () => {
        expect("incorrect" in game).toBe(true);
    });
    test("flag1 key exists", () => {
        expect("flag1" in game).toBe(true);
    });
    test("flag2 key exists", () => {
        expect("flag2" in game).toBe(true);
    });
    test("country name key exists", () => {
        expect("country" in game).toBe(true);
    });
    test("question number key exists", () => {
        expect("questnum" in game).toBe(true);
    });
});

// What happens when the New Game button is clicked
describe("newGame works correctly", () => {
    beforeAll(() => {
        game.questnum = 5;
        game.correct = 15;
        game.incorrect = 3;
        game.country = "New Zealand";
        game.flag1 = "flag-id-1";
        game.flag2 = "flag-id-2";
        document.getElementById("correct").innerText = "15";
        document.getElementById("incorrect").innerText = "3";
        document.getElementById("country-name").innerText = "New Zealand";
        document.getElementById("flag-id-1");
        document.getElementById("flag-id-2");
        newGame();
    });
    test("should set game correct to zero", () => {
        expect(game.correct).toEqual(0);
    });
    test("should set game incorrect to zero", () => {
        expect(game.incorrect).toEqual(0);
    });
    test("should set game country to ???", () => {
        expect(game.country).toEqual("???");
    });
    test("should set game flag1 to base flag", () => {
        expect(game.flag1).toEqual("flag-id-0");
    });
    test("should set game flag2 to base flag", () => {
        expect(game.flag2).toEqual("flag-id-0");
    });
    test("should reset questnum to 0", () => {
        expect(game.questnum).toEqual(0);
    });
});

// What happens when Start Game button is clicked
describe("startGame works correctly", () => {
    beforeAll(() => {
        game.correct = 0;
        game.incorrect = 0;
        game.country = "???";
        game.flag1 = "flag-id-0";
        game.flag2 = "flag-id-0";
        document.getElementById("correct").innerText = "0";
        document.getElementById("incorrect").innerText = "0";
        document.getElementById("country-name").innerText = "???";
        document.getElementById("flag-id-0");
        document.getElementById("flag-id-0");
        startGame();
    });
    // Code credit https://stackoverflow.com/questions/44712917/how-to-test-a-range-of-numbers-with-jest diralik
    test("should populate country name with a random number between 1 and 50", () => {
        expect(game.country).toBeGreaterThanOrEqual(1);
        expect(game.country).toBeLessThanOrEqual(50);
    });
    test("should populate flag1 with a random number between 1 and 50", () => {
        expect(game.flag1).toBeGreaterThanOrEqual(1);
        expect(game.flag1).toBeLessThanOrEqual(50);
    });
    test("should populate flag2 with a random number between 1 and 50", () => {
        expect(game.flag2).toBeGreaterThanOrEqual(1);
        expect(game.flag2).toBeLessThanOrEqual(50);
    });
    // Code credit https://stackoverflow.com/questions/69816466/how-to-check-for-multiple-values-in-jest-or-operator Maurice
    test("random number for country should equal random number of flag1 or flag2", () => {
        expect(game.flag1)||expect(game.flag2).toBe(game.country);
    });
    test("random number for flag1 cannot be the same as random number for flag2", () => {
        expect(game.flag1).not.toBe(game.flag2);
    });
});

// The gameplay logic
describe("check gameplay works correctly", () => {
    beforeAll(() => {
        game.correct = 15;
        game.incorrect = 3;
        game.country = "New Zealand";
        game.flag1 = "flag-id-1";
        game.flag2 = "flag-id-2";
        document.getElementById("correct").innerText = "15";
        document.getElementById("incorrect").innerText = "3";
        document.getElementById("country-name").innerText = "New Zealand";
        document.getElementById("flag-id-1");
        document.getElementById("flag-id-2");
        newGame();
    });
    test("should set game correct to zero", () => {
        expect(game.correct).toEqual(0);
    });
    test("should set game incorrect to zero", () => {
        expect(game.incorrect).toEqual(0);
    });
    test("should set game country to ???", () => {
        expect(game.country).toEqual("???");
    });
    test("should set game flag1 to base flag", () => {
        expect(game.flag1).toEqual("flag-id-0");
    });
    test("should set game flag2 to base flag", () => {
        expect(game.flag2).toEqual("flag-id-0");
    });
});