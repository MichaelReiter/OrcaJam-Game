  var groundGenDelay = 300000 / scrollSpeed;
  var platformGenDelay = ( 300000 / scrollSpeed ) / 2;

	function startPlatformGeneration() {

  	// 0 is passed to start generation with game start
  	platformGenTimer = game.time.events.loop(0, createPlatform, this);

	}

	function updatePlatformGeneration() {
	  // generation delay for normal gameplay is set
  	platformGenTimer.delay = platformGenDelay;

	}

	function startGroundGeneration() {

  	// 0 is passed to start generation with game start
  	groundGenTimer = game.time.events.loop(0 , createGround, this);
	
	}

	function updateGroundGeneration() {
		// generation delay for normal gameplay is set

  	groundGenTimer.delay = groundGenDelay;
	}

	function changeNextPlatformTime(platTimer) {

  // Math.random * 3 seconds generates a number between 0 and 3, the random factor in when the next platform will come
  // phaser.Timer.SECOND is the offset added to the random factor, so the next platform will not come for at LEAST a second
  var platformGenTime = ( ( Math.random() * 3 * platformGenDelay ) + platformGenDelay );
  platTimer.delay = platformGenTime;
}

