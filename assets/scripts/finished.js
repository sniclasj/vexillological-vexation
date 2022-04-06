/* jshint esversion: 8 */

// Code credit: https://stackoverflow.com/questions/47817325/storing-my-game-score-in-local-storage Antoni
let score = localStorage.getItem("result");
let percent = ((score / 20).toFixed(2))*100;

document.getElementById("game-result").innerHTML = `You scored ${score} out of 20! That's ${percent}%`;
document.getElementById("play-again-button").addEventListener('click', function () {
    location.href = 'vex-vex.html';
});
document.getElementById("back-to-start").addEventListener('click', function () {
    location.href = 'index.html';
});