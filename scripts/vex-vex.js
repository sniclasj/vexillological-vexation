let game = {
    correct: 0,
    incorrect: 0,
};

function newGame () {
    game.correct = 0;
    game.incorrect = 0;
};

module.exports = { game, newGame };