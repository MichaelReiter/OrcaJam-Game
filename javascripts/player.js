var player = game.add.sprite(0, game.world.height - 150, 'dude');
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
    toHell();
  }
  if (player.y < 0) {
    toHeaven();
  }
}

function toHell() {

  inHeaven = false;
  groundLevel = false;
  inHell = true;
  groundSprite = 'ground-hell';

  //destroy all platforms
  platformsGroup.forEach(function(obj) {
    obj.kill();
  });

  background.loadTexture('background-hell')

  platformCeilingOffset = ( windowH * 0.10 ); //this is the distance between the height of the game and the tallest platform
  platformFloorOffset = ( windowH * 0.33 ); //this is the distance between the bottom of the game and the lowest platform
  biasTowardsBottomMultiplier = 4;
  biasTowardsTopMultiplier = 8;

  platformWidth = 150;
  platformGenDelay = DELAY_CONSTANT * 0.3;

  createPits = false;
  groundGenDelay = 0;

  groundSprite = 'ground-hell';
  
  createInitalGround( windowH - ( windowH / 3 ) );
  createInitalGround(  windowH - platformHeight );
  
  platformsGroup = hellPlatforms = game.add.group();
  hellPlatforms.enableBody = true;
  game.physics.arcade.enable(hellPlatforms);

  player.y = 0;

  platformsGroup.forEach(function(platform) {
    platform.loadTexture('ground-hell');
  });

}

function toHeaven() {

  inHeaven = true;
  groundLevel = false;
  inHell = false;

}