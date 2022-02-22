/**
 * @jest-environment jsdom
 */

 const {game, newGame} = require("../vex-vex");

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
});

describe("newGame works correctly", () => {
    beforeAll(()=>{
        game.correct = 15;
        game.incorrect = 3;
        document.getElementById("correct").innerText = "15";
        document.getElementById("incorrect").innerText = "3";
        newGame();
    });
    test("should set game correct to zero", () => {
        expect(game.correct).toEqual(0);
    });
    test("should set game incorrect to zero", () => {
        expect(game.incorrect).toEqual(0);
    });
});