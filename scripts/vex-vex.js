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
    // Need to check the logic of the following if statement.
    // Should check if flag1 = flag2, if yes, should generate
    // a different flag2 number. Not sure if it is robust enough
    // to guarantee that flag1 won't equal flag2 again!
    if (game.flag1 = game.flag2) {
        game.flag2 = Math.floor(Math.random() * 50) + 1;
        game.country = [game.flag1, game.flag2][Math.floor(Math.random() * 2)];
    } else {
        game.flag1 = Math.floor(Math.random() * 50) + 1;
        game.flag2 = Math.floor(Math.random() * 50) + 1;
        game.country = [game.flag1, game.flag2][Math.floor(Math.random() * 2)];
    };
};

module.exports = {
    game,
    newGame,
    startGame
};