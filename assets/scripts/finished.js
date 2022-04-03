/* jshint esversion: 8 */

let score = localStorage.getItem("result");
let percent = ((score / 20) * 100);

document.getElementById("game-result").innerHTML = `You scored ${score} out of 20! That's ${percent}%`;
document.getElementById("play-again-button").addEventListener('click', function () {
    location.href = 'vex-vex.html';
});
document.getElementById("back-to-start").addEventListener('click', function () {
    location.href = 'index.html';
});