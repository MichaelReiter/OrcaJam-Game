var pitGenChance = 5; // a variable from 0 - 9 that controls chance of a pit being generated
var prevGeneratedPit = false;

function createGround() {

	if ( Math.random() < ( pitGenChance / 10 ) && !prevGeneratedPit ) {
		prevGeneratedPit = true;
		return ;
	}

	prevGeneratedPit = false;

  var groundInstance = groundGroup.create( game.world.width, game.world.height - platformHeight, 'ground');

  groundInstance.body.velocity.x = -150;

  groundInstance.body.immovable = true;

}

function createInitalGround() {

	groundGroup = game.add.group();
  groundGroup.enableBody = true;
  game.physics.arcade.enableBody(groundGroup);

  initialGroundGroup = game.add.group();
  
  initialGroundGroup.enableBody = true;

  game.physics.arcade.enableBody(initialGroundGroup);
  
  var initialGroundInstance = initialGroundGroup.create(0, game.world.height - platformHeight, 'ground' );

  initialGroundInstance.width = game.world.width;

  initialGroundInstance.body.velocity.x = -150;

  initialGroundInstance.body.immovable = true;

}

function destroyOldGround() {

  //get rid of old ground once it goes offscreen
}