var player = game.add.sprite(0, game.world.height - 150, 'dude');
var midJump = false;

function createPlayer() {

  // The player and its settings
  player = game.add.sprite(50, game.world.height - 150, 'dude');

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0;
  player.body.gravity.y = 300;
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
  }

  if (!player.body.touching.down) {
    player.body.velocity.x = 0;
    midJump = true;
  }

  if (jumpKey.isDown && midJump == false) {
    midJump = true;
    player.body.velocity.x = 0;
    player.body.velocity.y = -250;
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

}

function toHeaven() {

}