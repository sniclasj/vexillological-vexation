let game = {
    correct: 0,
    incorrect: 0,
    flag1: ["wales", "new-zealand"],
    country: ["wales","new-zealand"],
};

function newGame () {
    game.correct = 0;
    game.incorrect = 0;
};

module.exports = { game, newGame };