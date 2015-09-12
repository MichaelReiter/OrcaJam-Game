var platformHeight = 32;

function createPlatform() {

  platforms = game.add.group();

  platforms.enableBody = true;

  game.physics.arcade.enable(platforms);

  var plat_y_pos = 100 + ( Math.floor( ( Math.random() * 400 ) + 1 ) );;

  var platformWidth = Math.floor( ( Math.random() ) + 1 );

  var ledge = platforms.create( 400, plat_y_pos, 'ground' );

  ledge.scale.setTo(platformWidth, 1);

  ledge.body.velocity.x = -150;

  ledge.body.immovable = true;

}
