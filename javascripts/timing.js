var DELAY_CONSTANT = ( 300000 / scrollSpeed );
var groundGenDelay = DELAY_CONSTANT * 0.5;
var platformGenDelay = DELAY_CONSTANT * 0.43;   //platforms are created closed horizontally as this value decreases
var platformGenRandomnessMultipler = 2.5;
var scoreUpdateRate = 10; // milliseconds


function startPlatformGeneration() {
  // 0 is passed to start generation with game start
  platformGenTimer = game.time.events.loop(0, createPlatform, this);
  platformGenTimer.delay = platformGenDelay;
}

function startScoreCounting() {
	score = 0;
	scoreLabel = game.add.text(windowW/2, windowH/10, score, { font: 'bold 20pt Comic Sans MS', fill: '#ffffff' }); 
	ScoreTimer = game.time.events.loop( scoreUpdateRate, updateScore, this );
}

function startGroundGeneration() {
  // 0 is passed to start generation with game start
  groundGenTimer = game.time.events.loop(0 , createGround, this);
  groundGenTimer.delay = groundGenDelay;
}

function changeNextPlatformTime(platTimer) {
  // Math.random * 3 seconds generates a number between 0 and 3, the random factor in when the next platform will come
  // phaser.Timer.SECOND is the offset added to the random factor, so the next platform will not come for at LEAST a second
  var platformGenTime = ( ( Math.random() * platformGenRandomnessMultipler * platformGenDelay ) + platformGenDelay );
  platTimer.delay = platformGenTime;
}

function enablePauseGame() {
  var pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);

  if (pauseKey.isDown) {
    alert("Game paused.");
  }
}
