let game = {
    correct: 0,
    incorrect: 0,
    flag1: ["wales", "new-zealand"],
    flag2: ["wales", "new-zealand"],
    country: ["wales", "new-zealand"],
};

function newGame() {
    game.correct = 0;
    game.incorrect = 0;
    game.country = "???";
    game.flag1 = "flag-id-0";
    game.flag2 = "flag-id-0";
};

function startGame() {
    game.country = Math.floor(Math.random() * 50) + 1;
    game.flag1 = Math.floor(Math.random() * 50) + 1;
    game.flag2 = Math.floor(Math.random() * 50) + 1;
};

module.exports = {
    game,
    newGame,
    startGame
};