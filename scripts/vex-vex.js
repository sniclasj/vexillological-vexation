// Define keys for the game
let game = {
    database: {
        flags: ["arg", "aut", "bel", "bol", "bra", "can", "cpv", "chl", "hrv", "cze", "dnk", "etr", "ecu", "egy", "est", "eth", "fra", "deu", "gha", "grl", "hnd", "isl", "irl", "imn", "ita", "civ", "jpn", "ken", "kir", "mdg", "mwi", "mlt", "nru", "nzl", "nga", "nir", "nor", "pan", "wsm", "sco", "sen", "syc", "zaf", "esp", "swe", "ukr", "ury", "usa", "vnm", "wal"],
        countries: ["Argentina", "Austria", "Belgium", "Bolivia", "Brazil", "Canada", "Cape Verde", "Chile", "Croatia", "Czech Republic", "Denmark", "East Timor", "Ecuador", "Egypt", "Estonia", "Ethiopia", "France", "Germany", "Ghana", "Greenland", "Honduras", "Iceland", "Ireland", "Isle of Man", "Italy", "Ivory Coast", "Japan", "Kenya", "Kiribati", "Madagascar", "Malawi", "Malta", "Nauru", "New Zealand", "Nigeria", "Northern Ireland", "Norway", "Panama", "Samoa", "Scotland", "Senegal", "Seychelles", "South Africa", "Spain", "Sweden", "Ukraine", "Uruguay", "USA", "Vietnam", "Wales"],
    },
    option1: [],
    option2: [],
    question: [],
    playerguess: [],
    usedflags: [],
    correctscore: [],
    incorrectscore: [],
};

// Function to randomly generate values for game.option1 and 
// game.option2 from the game.database.flags array
function optionGen() {
    game.option1 = (game.database.flags[Math.floor(Math.random() * game.database.flags.length)]);
    //Filters game.option1 value out of game.database.flags array
    //and selects game.option2 value from filtered array. This
    //ensures that game.option1 != game.option2
    //Credit: https://www.w3schools.com/jsref/jsref_filter.asp
    //Credit: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    var value = game.option1;
    var arr = game.database.flags;
    databaseFilt = arr.filter(function (item) {
        return item !== value
    });
    //Generates game.option2 value from the filtered dabase which does
    //not contain the generated game.option1 value
    game.option2 = (databaseFilt[Math.floor(Math.random() * databaseFilt.length)]);
    //Generates question value which is either game.option1 or game.option2
    game.question = [game.option1, game.option2][Math.round(Math.random())];
};

function changeIds() {
// Credit: https://www.w3schools.com/jsref/prop_html_id.asp
    document.getElementById("option1").id = game.option1;
    document.getElementById("option2").id = game.option2;
// Credit: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext
    var indexQ = game.database.flags.indexOf(game.question);
    document.getElementById("question").innerHTML = game.database.countries[indexQ];
};

function revertIds() {
    document.getElementById(game.option1).id = "option1";
    document.getElementById(game.option2).id = "option2";
}

//Credit: Modified from https://stackoverflow.com/questions/4825295/onclick-to-get-the-id-of-the-clicked-button shamittomar
function playerGuess(clicked_id) {
      game.playerguess.push(clicked_id);
  }

function resetGuess(){
    game.playerguess = [];
}

function checkAnswer() {
    if (game.playerguess == game.question) {
    game.usedflags.push(game.question)
    game.correctscore++
    document.getElementById("correct").innerHTML = game.correctscore;
} else {
    game.incorrectscore++
};
    resetGuess();
    revertIds();
    optionGen();
    changeIds();
};

module.exports = {
    game,
    optionGen,
    changeIds,
    revertIds,
    playerGuess,
    resetGuess,
    checkAnswer,
};