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
    // Plan is for this to generate a number which
    // links to a country name in an object e.g. 
    // let country1 = Math.floor(Math.random() * 25) + 1;
    // along with var (countries) = {1:"Wales", 2:"New Zealand"}
    game.country = 1;
};

module.exports = {
    game,
    newGame,
    startGame
};