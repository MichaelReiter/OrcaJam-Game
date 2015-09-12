var pitGenChance = 5; // a variable from 0 - 9 that controls chance of a pit being generated
var prevGeneratedPit = false;
var groundGroup;

function createGround() {

	if ( Math.random() < ( pitGenChance / 10 ) && !prevGeneratedPit ) {
		prevGeneratedPit = true;
		return ;
	}

	prevGeneratedPit = false;

  groundGroup = game.add.group();

  groundGroup.enableBody = true;

  game.physics.arcade.enableBody(groundGroup);

  var groundInstance = groundGroup.create( game.world.width, game.world.height - platformHeight, 'ground' );

  groundInstance.body.velocity.x = -150;

  groundInstance.body.immovable = true;

}

function createInitalGround() {

  initialGround = game.add.group();
  
  initialGround.enableBody = true;

  game.physics.arcade.enableBody(initialGround);
  
  var initialGroundInstance = initialGround.create(0, game.world.height - platformHeight, 'initialGround' );

  initialGroundInstance.width = game.world.width;

  initialGroundInstance.body.velocity.x = -150;

  initialGroundInstance.body.immovable = true;

}