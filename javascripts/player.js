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

  //destroy all platforms
  platformsGroup.forEach(function(obj) {
    obj.kill();
  });

  background = game.add.sprite(0, 0, 'background-hell');
  background.height = game.height;
  background.width = game.width;
  
  player.y = 0;
  player.bringToTop();

}

function toHeaven() {

}