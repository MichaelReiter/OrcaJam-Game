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
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  player.animations.play('right');

  player.body.velocity.x = 150;

}

function enablePlayerJump() {
  var jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  if (player.body.touching.down) {
    midJump = false;
    player.body.velocity.x = 150;
  }

  if (!player.body.touching.down) {
    player.body.velocity.x = 0;
  }

  if (jumpKey.isDown && midJump == false) {
    midJump = true;
    player.body.velocity.x = 0;
    player.body.velocity.y = -250;
  }
}
