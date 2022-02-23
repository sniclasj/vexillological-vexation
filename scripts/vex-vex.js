let game = {
    correct: 0,
    incorrect: 0,
    flag1: ["wales", "new-zealand"],
    flag2: ["wales", "new-zealand"],
    country: ["wales","new-zealand"],
};

function newGame () {
    game.correct = 0;
    game.incorrect = 0;
    game.country = "???";
    game.flag1 = "flag-id-0";
    game.flag2 = "flag-id-0";
};

function startGame () {

}

module.exports = { game, newGame, startGame };