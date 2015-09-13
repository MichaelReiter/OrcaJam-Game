var player;
var midJump = false;

function createPlayer() {
  desiredXPosition = windowW/3;

  // The player and its settings
  player = game.add.sprite(desiredXPosition, game.world.height - 150, 'dude');

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0;
  player.body.gravity.y = 2000;
  player.body.collideWorldBounds = false;
  player.body.velocity.x = scrollSpeed;

  player.animations.add('running', [5, 6, 7, 8], 10, true);
  player.animations.play('running');
}

function enablePlayerJump() {
  var jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  var jumpCheatKey = game.input.keyboard.addKey(Phaser.Keyboard.C);

  if (player.body.touching.down) {
    midJump = false;
    player.body.velocity.x = scrollSpeed;
    accelerateToRunningPosition();
  }

  if (!player.body.touching.down) {
    player.body.velocity.x = 0;
    midJump = true;
  }

  if (jumpKey.isDown && midJump == false) {
    midJump = true;
    player.body.velocity.x = 0;
    player.body.velocity.y = -750;
  }

  if( jumpCheatKey.isDown ) {
    player.body.velocity.y = -700;
  }
}

function accelerateToRunningPosition() {
  platformsGroup.forEach(function(platform) {
    platform.bringToTop();
  });

  if (player.x < desiredXPosition) {
    player.body.velocity.x = scrollSpeed * 1.1;
  } else {
    player.body.velocity.x = scrollSpeed * 0.9;
  }
}

function enableZoneChange() {
  if (player.y > windowH) {
    if( groundLevel ) {
      toHell();
    }
    else if ( inHell ) {
      // do nothing
    }
    else if ( inHeaven ) {
      toGround();
    }
  }
  if (player.y < 0) {
    if( groundLevel ) {
      toHeaven();
    }
    else if ( inHell ) {
      toGround()
    }
    else if ( inHeaven ) {
      // do nothing
    }
  }
}

function toHeaven() {
// 
}

function toGround() {
  inHeaven = false;
  groundLevel = true;
  inHell = false;

  background.loadTexture('background');
  groundSprite = 'ground';
  platformSprite = 'ground';

  ScoreTimer.delay = 10;

  platformsGroup.forEach(function(platform) {
    platform.loadTexture('ground');
  });

  platformCeilingOffset = ( windowH * 0.05 ); //this is the distance between the height of the game and the tallest platform
  platformFloorOffset = ( windowH * 0.12 ); //this is the distance between the bottom of the game and the lowest platform
  biasTowardsBottomMultiplier = 3;
  biasTowardsTopMultiplier = 15;

  platformWidth = 200;
  platformGenDelay = DELAY_CONSTANT * 0.43;   //platforms are created closed horizontally as this value decreases

  createPits = true;
  groundGenDelay = DELAY_CONSTANT * 0.5;

  createInitalGround(  windowH - platformHeight );
}

function toHell() {

  inHeaven = false;
  groundLevel = false;
  inHell = true;

  platformSprite = 'ground-hell';
  groundSprite = 'lava';

  ScoreTimer.delay = 100;

  //destroy all platforms
  platformsGroup.forEach(function(obj) {
    obj.kill();
  });

  background.loadTexture('background-hell');

  platformCeilingOffset = ( windowH * 0.10 ); //this is the distance between the height of the game and the tallest platform
  platformFloorOffset = ( windowH * 0.33 ); //this is the distance between the bottom of the game and the lowest platform
  biasTowardsBottomMultiplier = 4;
  biasTowardsTopMultiplier = 8;

  platformWidth = 150;
  platformGenDelay = DELAY_CONSTANT * 0.3;

  createPits = false;
  groundGenDelay = 0;
  
  createInitalGround( (windowH - ( windowH / 3 ) - 10), 'ground-hell');
  createInitalGround(  (windowH - platformHeight), 'lava' );
  
  platformsGroup = hellPlatforms = game.add.group();
  hellPlatforms.enableBody = true;
  game.physics.arcade.enable(hellPlatforms);

  player.y = 0;

  platformsGroup.forEach(function(platform) {
    platform.loadTexture('ground-hell');
  });
}