  

	function startPlatformGeneration() {

  	// 0 is passed to start generation with game start
  	platformGenTimer = game.time.events.loop(0, createPlatform, this);

	}

	function updatePlatformGeneration() {
	  // generation delay for normal gameplay is set
  	platformGenTimer.delay = ( 300000 / scrollSpeed ) * 2;

	}

	function startGroundGeneration() {

  	// 0 is passed to start generation with game start
  	groundGenTimer = game.time.events.loop(0 , createGround, this);
	
	}

	function updateGroundGeneration() {
		// generation delay for normal gameplay is set
  	groundGenTimer.delay = 300000 / scrollSpeed;

	}
