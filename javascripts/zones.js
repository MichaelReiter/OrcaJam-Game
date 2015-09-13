function enableZoneChange() {
  if (player.y > windowH) {
    if(groundLevel) {
      toHell();
    }
    else if (inHell) {
      // do nothing
    }
    else if (inHeaven) {
      toGround();
    }
  }
  if (player.y < 0) {
    if(groundLevel) {
      toHeaven();
    }
    else if (inHell) {
      toGround()
    }
    else if (inHeaven) {
      // do nothing
    }
  }
}

function toHeaven() {
  inTransition = true;
  inHeaven = true;
  groundLevel = false;
  inHell = false;

  //change future created platform sprites
  platformSprite = 'ground-heaven';
  groundSprite = 'ground-heaven';

  // update timer speed for enviroment generation and score
  ScoreTimer.delay = 10;
  platformGenDelay = DELAY_CONSTANT * 0.75;
  groundGenDelay = 0;

  //destroy all platforms
  platformsGroup.forEach(function(obj) {
    obj.kill();
  });

  platformCeilingOffset = ( windowH * 0.10 ); //this is the distance between the height of the game and the tallest platform
  platformFloorOffset = ( windowH * 0.33 ); //this is the distance between the bottom of the game and the lowest platform
  biasTowardsBottomMultiplier = 4;
  biasTowardsTopMultiplier = 8;

  platformWidth = 300;

  player.gravity /= 3;
  scrollSpeed *= 2;

  createPits = false;
  
  createInitalGround((windowH - ( windowH / 3 ) - 10), 'ground-heaven', 1);

  player.y = 0;

  background.loadTexture('background-heaven');

  //change existing ground to be hell sprite
  platformsGroup.forEach(function(platform) {
    platform.loadTexture('ground-heaven');
  });

  groundGroup.forEach(function(ground) {
    ground.kill();
  });

  inTransition = false;
}

function toGround() {
  inTransition = true;
  inHeaven = false;
  groundLevel = true;
  inHell = false;

  platformGenDelayMultipler = 0.43;
  groundGenDelayMultipler = 0.6;
  updateSpeed(500);

  ScoreTimer.delay = 10;

  background.loadTexture('background');
  groundSprite = 'ground';
  platformSprite = 'ground';


  platformCeilingOffset = ( windowH * 0.05 ); //this is the distance between the height of the game and the tallest platform
  platformFloorOffset = ( windowH * 0.12 ); //this is the distance between the bottom of the game and the lowest platform
  biasTowardsBottomMultiplier = 3;
  biasTowardsTopMultiplier = 15;

  platformWidth = 200;

  createPits = true;

  player.y = ( windowH * 0.75);

  createInitalGround(windowH - platformHeight, 'ground', 1);

  platformsGroup.forEach(function(platform) {
    platform.loadTexture('ground');
  });

  groundGroup.forEach(function(ground) {
    ground.loadTexture('ground');
  });


  inTransition = false;
}

function toHell() {
  inTransition = true;
  inHeaven = false;
  groundLevel = false;
  inHell = true;

  platformGenDelayMultipler = 0.3;
  groundGenDelayMultipler = 0.01;
  updateSpeed(500);

  ScoreTimer.delay = 100;
  //change future created platform sprites
  platformSprite = 'ground-hell';
  groundSprite = 'lava';

  // update timer speed for enviroment generation and score

  //destroy all platforms
  platformsGroup.forEach(function(obj) {
    obj.kill();
  });

  platformCeilingOffset = ( windowH * 0.10 ); //this is the distance between the height of the game and the tallest platform
  platformFloorOffset = ( windowH * 0.33 ); //this is the distance between the bottom of the game and the lowest platform
  biasTowardsBottomMultiplier = 4;
  biasTowardsTopMultiplier = 8;

  platformWidth = 150;

  createPits = false;
  
  createInitalGround((windowH - ( windowH / 3 ) - 10), 'ground-hell', 1);
  createInitalGround((windowH - platformHeight), 'lava', 1.2);

  player.y = 0;

  background.loadTexture('background-hell');

  //change existing ground to be hell sprite
  platformsGroup.forEach(function(platform) {
    platform.loadTexture('ground-hell');
  });

  groundGroup.forEach(function(ground) {
    ground.loadTexture('lava');
  });


  inTransition = false;
}