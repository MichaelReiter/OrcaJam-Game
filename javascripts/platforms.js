function createPlatforms() {

  platforms = game.add.group();

  platforms.enableBody = true;

  game.physics.arcade.enable(platforms);

  var plat_y_pos = 300;

  var plat_width;

  plat_y_pos = 100 + ( Math.floor( ( Math.random() * 400 ) + 1 ) );

  plat_width = Math.floor( ( Math.random() * 2 ) + 1 );

  var ledge = platforms.create( 400, plat_y_pos, 'ground' );

  // ledge.scale( plat_width, 1);

  ledge.body.velocity.x = -150;
  
}