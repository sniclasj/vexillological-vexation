let game = {
    correct: 0,
    incorrect: 0,
    flag1: [],
    flag2: [],
    country: [],
};

function newGame() {
    game.correct = 0;
    game.incorrect = 0;
    game.country = "???";
    game.flag1 = "flag-id-0";
    game.flag2 = "flag-id-0";
};

function startGame() {
    game.flag1 = Math.floor(Math.random() * 50) + 1;
    game.flag2 = Math.floor(Math.random() * 50) + 1;
    game.country = [game.flag1, game.flag2][Math.floor(Math.random() * 2)];
};

module.exports = {
    game,
    newGame,
    startGame
};