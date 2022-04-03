/* jshint esversion: 8 */

let score = localStorage.getItem("result");

document.getElementById("game-result").innerHTML = `You scored ${score} out of 20!`;
document.getElementById("play-again-button").addEventListener('click', function() {
    location.href = 'vex-vex.html';
});