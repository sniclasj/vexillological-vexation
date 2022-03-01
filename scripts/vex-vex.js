let game = {
    questnum: 0,
    correct: 0,
    incorrect: 0,
    flag1: 0,
    flag2: 0,
    country: 0,
    guessedflag: 0,
    storedflag: [],
};

function resetGame() {
    game.questnum = 0;
    game.correct = 0;
    game.incorrect = 0;
    game.country = 0;
    game.flag1 = 0;
    game.flag2 = 0;
    game.guessedflag = 0;
};

function startGame() {
    game.questnum = 1;
    game.flag1 = Math.floor(Math.random() * 50) + 1;
    game.flag2 = Math.floor(Math.random() * 50) + 1;
    game.country = [game.flag1, game.flag2][Math.floor(Math.random() * 2)];
    // Need to check the logic of the following if statement.
    // Should check if flag1 = flag2, if yes, should generate
    // a different flag2 number. Not sure if it is robust enough
    // to guarantee that flag1 won't equal flag2 again!
    if (game.flag1 = game.flag2) {
        game.flag1;
        game.flag2 = Math.floor(Math.random() * 50) + 1;
        game.country = [game.flag1, game.flag2][Math.floor(Math.random() * 2)];
    } else {
        game.flag1;
        game.flag2;
        game.country = [game.flag1, game.flag2][Math.floor(Math.random() * 2)];
    };
};

function storeFlagId() {
    game.storedflag.push(game.guessedflag);
}

function nextQuestion() {
    game.questnum++;
}

function playerGuess() {
    game.guessedflag = 43;
    if (game.country === game.guessedflag) {
        game.correct++;
        storeFlagId();
    } else if (game.country != game.guessedflag) {
        game.incorrect++;
    }
}

module.exports = {
    game,
    resetGame,
    startGame,
    storeFlagId,
    nextQuestion,
    playerGuess,
};