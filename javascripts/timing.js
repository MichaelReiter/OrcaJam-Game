var DELAY_CONSTANT = ( 300000 / scrollSpeed );
var groundGenDelay = DELAY_CONSTANT * 0.5;
var platformGenDelay = DELAY_CONSTANT * 0.43;   //platforms are created closed horizontally as this value decreases
var platformGenDistanceMultipler = 2.5;

function startPlatformGeneration() {

  // 0 is passed to start generation with game start
  platformGenTimer = game.time.events.loop(0, createPlatform, this);
  platformGenTimer.delay = platformGenDelay;

}

// function updatePlatformGeneration() {
//   // generation delay for normal gameplay is set

// }

function startGroundGeneration() {

  // 0 is passed to start generation with game start
  groundGenTimer = game.time.events.loop(0 , createGround, this);
  groundGenTimer.delay = groundGenDelay;

}

// function updateGroundGeneration() {
//  // generation delay for normal gameplay is set

// }

function changeNextPlatformTime(platTimer) {

  // Math.random * 3 seconds generates a number between 0 and 3, the random factor in when the next platform will come
  // phaser.Timer.SECOND is the offset added to the random factor, so the next platform will not come for at LEAST a second
  var platformGenTime = ( ( Math.random() * platformGenRandomnessMultipler * platformGenDelay ) + platformGenDelay );
  platTimer.delay = platformGenTime;
}

function enablePauseGame() {
  var pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);

  if (pauseKey.isDown && game.isRunning) {
    game.isRunning = false;
  }
}
