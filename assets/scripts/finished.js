/* jshint esversion: 8 */

let score = localStorage.getItem("score");

document.getElementById("game-result").innerHTML = `You scored `+(score)+` out of 20!`;
document.getElementById("play-again-button").addEventListener('click', e => {
    location.href = 'vex-vex.html';
});