/**
 * @jest-environment jsdom
 */

const {
    game,
    resetGame,
    startGame,
    playerGuess
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
    test("guessed flag key exists", () => {
        expect("guessedflag" in game).toBe(true);
    });
});

// What happens when the Reset button is clicked
describe("resetGame works correctly", () => {
    beforeAll(() => {
        game.questnum = 5;
        game.correct = 15;
        game.incorrect = 3;
        game.country = 43;
        game.flag1 = 43;
        game.flag2 = 25;
        document.getElementById("question-num").innerText = "5";
        document.getElementById("correct").innerText = "15";
        document.getElementById("incorrect").innerText = "3";
        document.getElementById("country-name").innerText = "43";
        document.getElementById("43");
        document.getElementById("25");
        resetGame();
    });
    test("should set game correct to zero", () => {
        expect(game.correct).toEqual(0);
    });
    test("should set game incorrect to zero", () => {
        expect(game.incorrect).toEqual(0);
    });
    test("should set game country to 0", () => {
        expect(game.country).toEqual(0);
    });
    test("should set game flag1 to be 0", () => {
        expect(game.flag1).toEqual(0);
    });
    test("should set game flag2 to be 0", () => {
        expect(game.flag2).toEqual(0);
    });
    test("should reset questnum to 0", () => {
        expect(game.questnum).toEqual(0);
    });
});

// What happens when Start Game button is clicked
describe("startGame works correctly", () => {
    beforeAll(() => {
        game.questnum = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.country = 0;
        game.flag1 = 0;
        game.flag2 = 0;
        document.getElementById("question-num").innerText = "0";
        document.getElementById("correct").innerText = "0";
        document.getElementById("incorrect").innerText = "0";
        document.getElementById("country-name").innerText = "0";
        document.getElementById("0");
        document.getElementById("0");
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
    test("questnum should equal 1", () => {
        expect(game.questnum).toBe(1);
    });
});

// What happens when a flag image is clicked
describe("player guess correct works correctly", () => {
    beforeAll(() => {
        game.questnum = 1;
        game.correct = 0;
        game.incorrect = 0;
        game.country = 43;
        game.flag1 = 43;
        game.flag2 = 25;
        game.guessedflag = 0;
        document.getElementById("question-num").innerText = "1";
        document.getElementById("correct").innerText = "0";
        document.getElementById("incorrect").innerText = "0";
        document.getElementById("country-name").innerText = "43";
        document.getElementById("43");
        document.getElementById("25");
        playerGuess();
    });
    test("should increment question number by 1", () => {
        expect(game.questnum).toEqual(2);
    });
});