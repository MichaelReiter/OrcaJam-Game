var DELAY_CONSTANT;
var platformGenDelay;
var groundGenDelay;
var groundGenDelayMultipler = 0.5;
var platformGenDelayMultipler = 0.43;
var platformGenRandomnessMultipler = 2.5;

function updateSpeed(speed) {
	scrollSpeed = speed;
}

function startScoreCounting() {
	score = 0;
	scoreLabel = game.add.text(windowW/2, windowH/10, score, { font: 'bold 20pt Comic Sans MS', fill: '#ffffff' }); 
	ScoreTimer = game.time.events.loop( 10, updateScore, this );
}

// function changeNextPlatformTime() {
//   // Math.random * 3 seconds generates a number between 0 and 3, the random factor in when the next platform will come
//   // phaser.Timer.SECOND is the offset added to the random factor, so the next platform will not come for at LEAST a second
//   newDelay = ( ( Math.random() * platformGenRandomnessMultipler * platformGenDelay ) + platformGenDelay );
//   platformGenTimer.delay = newDelay;
// }

// function enablePauseGame() {
//   var pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
//   if (pauseKey.isDown) {
//     alert("Game paused.");
//   }
// }
