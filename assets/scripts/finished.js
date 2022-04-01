/* jshint esversion: 8 */
document.getElementById("game-result").innerHTML = `You scored X out of 20!`
document.getElementById("play-again-button").addEventListener('click', e => {
    location.href = 'vex-vex.html';
});