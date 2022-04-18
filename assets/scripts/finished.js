/* jshint esversion: 8 */

// Calculate a percentage score from user's game result.
// Code credit: https://stackoverflow.com/questions/47817325/storing-my-game-score-in-local-storage Antoni
let score = localStorage.getItem("result");
let percent = ((score / 20).toFixed(2)) * 100;

// Generates text in the game-result section in finished.html.
document.getElementById("game-result").innerHTML = `You scored ${score} out of 20! That's ${percent}%`;

// Directs user to start a new game via a click on the 'play again' button.
document.getElementById("play-again-button").addEventListener('click', function () {
    location.href = 'vex-vex.html';
});

// Directs user to the landing page via a click on the 'no thanks' button.
document.getElementById("back-to-start").addEventListener('click', function () {
    location.href = 'index.html';
});