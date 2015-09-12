function createGround() {

  ground = game.add.group();

  ground.enableBody = true;

  game.physics.arcade.enableBody(ground);

  var groundInstance = ground.create( game.world.width, game.world.height - platformHeight, 'ground' );

  groundInstance.body.velocity.x = -150;

  groundInstance.body.immovable = true;

}

function createInitalGround() {

  initialGround = game.add.group();
  
  initialGround.enableBody = true;

  game.physics.arcade.enableBody(initialGround);
  
  initialGround = initialGround.create(0, game.world.height - platformHeight, 'ground' );

  initialGround.width = game.world.width;

  initialGround.body.velocity.x = -150;

  initialGround.body.immovable = true;

}