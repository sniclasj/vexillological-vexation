/* jshint esversion: 8 */

// Define keys for the game.
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
    questionnum: [],
};

// Function to randomly generate values for game.option1 and 
// game.option2 from the game.database.flags array.
function optionGen() {
    game.questionnum++;
    document.getElementById("question-num").innerHTML = `Question Number: ` + (game.questionnum);
    game.option1 = (game.database.flags[Math.floor(Math.random() * game.database.flags.length)]);

    //Filters game.option1 value out of game.database.flags array
    //and selects game.option2 value from filtered array. This
    //ensures that game.option1 != game.option2.
    //Credit: https://www.w3schools.com/jsref/jsref_filter.asp
    //Credit: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    let value = game.option1;
    let arr = game.database.flags;
    let databaseFilt = arr.filter(function (item) {
        return item !== value;
    });
    //Generates game.option2 value from the filtered dabase which does
    //not contain the generated game.option1 value.
    game.option2 = (databaseFilt[Math.floor(Math.random() * databaseFilt.length)]);
    //Generates question value which is either game.option1 or game.option2.
    game.question = [game.option1, game.option2][Math.round(Math.random())];
}

// Replaces html elements with ids option1 and option2 with the randomly generated flag image background ids game.option1 and game.option2.
function changeIds() {
    // Credit: https://www.w3schools.com/jsref/prop_html_id.asp

    let flag1 = document.getElementById("option1");
    let flag2 = document.getElementById("option2");
    flag1.style.background = `url(assets/images/${game.option1}-flag.png) center no-repeat`;
    flag2.style.background = `url(assets/images/${game.option2}-flag.png) center no-repeat`;
    flag1.id = game.option1;
    flag2.id = game.option2;
    // Identifies index of country name linked to random flag id used for game.question and publishes it into the innerHTML text of html element with id "question".
    // Credit: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext
    let indexQ = game.database.flags.indexOf(game.question);
    document.getElementById("question").innerHTML = `Which flag belongs to...` + (game.database.countries[indexQ]) + `?`;
}

// Changes the flag image background ids of html elements with ids game.option1 and game.option2 back to option1 and option2 respectively.
function revertIds() {
    let opt1 = document.getElementById(game.option1);
    let opt2 = document.getElementById(game.option2);
    opt1.style.background = `url(assets/images/all-flags.gif) center no-repeat`;
    opt2.style.background = `url(assets/images/all-flags.gif) center no-repeat`;
    opt1.id = "option1";
    opt2.id = "option2";
}

// Pushes the id of the clicked element into game.playerguess.
//Credit: Modified from https://stackoverflow.com/questions/4825295/onclick-to-get-the-id-of-the-clicked-button shamittomar
function playerGuess(clicked_id) {
    game.playerguess.push(clicked_id);
}

// Resets game.playerguess from containing the value of the clicked id back to an empty array.
function resetGuess() {
    game.playerguess = [];
}

// Ends the game and directs user to finished.html if the sum of game.correctscore and game.incorrectscore is equal to 20.
// Changes html text of elements with ids "question-num" and "question" to 'Game Over!' and 'Thanks for Playing!' respectively.
// Stores the number of correct answers as "result"to be called upon on a different page.
function endGame() {
    if (game.correctscore + game.incorrectscore == 20) {
        document.getElementById("question-num").innerHTML = `Game Over!`;
        document.getElementById("question").innerHTML = `Thanks For Playing!`;
        // Code Credit: https://stackoverflow.com/questions/47817325/storing-my-game-score-in-local-storage Antoni
        localStorage.setItem("result", document.getElementById("correct").innerHTML);
        location.href = 'finished.html';
    }
}

function checkAnswer() {
    // Defines indexQ as the value of the index of flag id pushed into game.question.
    let indexQ = game.database.flags.indexOf(game.question);
    // If game.playerguess id == game.question id:
    if (game.playerguess == game.question) {
        // id of game.question is pushed into game.usedflags array.
        game.usedflags.push(game.question);
        // Flag id and country id are spliced from the overall game.database so that they cannot appear in the game again.
        // Splice code credit: https://love2dev.com/blog/javascript-remove-from-array/#remove-from-array-splice
        game.database.flags.splice(indexQ, 1);
        game.database.countries.splice(indexQ, 1);
        // game.correctscore increments by 1 and the value of the html element with id "correct" is updated to the new value.
        game.correctscore++;
        document.getElementById("correct").innerHTML = game.correctscore;
        // If game.playerguess == the id "option1"or "option2", this ensures the score remains as zero.
        // This is to prevent accidental score incrementation in the short period of time where placeholder images are in place instead of flag images.
        // The ids of the placeholder images are "option1" and "option2" respectively so if these are clicked, the code below ensures the scores do not accidentally increment.
    } else if (game.playerguess == "option1") {
        game.correctscore = 0;
        game.incorrectscore = 0;
    } else if (game.playerguess == "option2") {
        game.correctscore = 0;
        game.incorrectscore = 0;
        // If game.playerguess != game.question:
        // game.incorrectscore increments by 1 and the value of the html element with id "incorrect" is updated to the new value.
    } else if (game.playerguess != game.question) {
        game.incorrectscore++;
        document.getElementById("incorrect").innerHTML = game.incorrectscore;
    }
    // Calls previously defined functions within the checkAnswer function.
    resetGuess();
    revertIds();
    optionGen();
    changeIds();
    endGame();
}

// Awaits for the content of the page to be loaded before running optionGen and changeIds functions which are integral to displaying the flag options for the player to guess.
document.addEventListener("DOMContentLoaded", function () {
    optionGen();
    changeIds();
});

// Pushes the id of the clicked element into the playerGuess array and instigates the running of the checkAnswer function when the html element with id "option1" is clicked.
// The nature of the functions means that the element with id "option1" changes dynamically as the id is changed to be a flag id before being reset to "option1" before being assigned a new flag id.
document.getElementById("option1").addEventListener('click', function () {
    playerGuess(this.id);
    checkAnswer();
});

// Pushes the id of the clicked element into the playerGuess array and instigates the running of the checkAnswer function when the html element with id "option2" is clicked.
// The nature of the functions means that the element with id "option2" changes dynamically as the id is changed to be a flag id before being reset to "option2" before being assigned a new flag id.
document.getElementById("option2").addEventListener('click', function () {
    playerGuess(this.id);
    checkAnswer();
});

// Lets the user click on the heading 'Vexillological Vexation' to return to the landing page in-game.
document.getElementById("in-game-heading").addEventListener('click', function () {
    location.href = 'index.html';
});

// Lets the user click on the reset button a to restart the game in-game.
document.getElementById("reset-button").addEventListener('click', function () {
    location.href = 'vex-vex.html';
});

// module.exports is required to export the objects and functions to the Jest testing file.
// The if statement prevents this from logging an error in the browser console.
// Code Credit: https://stackoverflow.com/a/68671391 Kapil Sinha

if (typeof module !== "undefined") module.exports = {
    game,
    optionGen,
    changeIds,
    revertIds,
    playerGuess,
    resetGuess,
    checkAnswer,
    endGame,
};