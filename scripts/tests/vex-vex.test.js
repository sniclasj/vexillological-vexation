/**
 * @jest-environment jsdom
 */

const {
    game,
    resetGame,
    startGame,
    storeFlagId,
    nextQuestion,
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
});