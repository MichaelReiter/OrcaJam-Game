var pitGenChance = 5; // a variable from 0 - 9 that controls chance of a pit being generated
var prevGeneratedPit = false;

function initializeGroundGroups()
{
	groundGroup = game.add.group();
  groundGroup.enableBody = true;
  game.physics.arcade.enableBody(groundGroup);
 
  initialGroundGroup = game.add.group();
  initialGroundGroup.enableBody = true;
  game.physics.arcade.enableBody(initialGroundGroup);
}

function createGround() {

	if ( Math.random() < ( pitGenChance / 10 ) && !prevGeneratedPit ) {
		prevGeneratedPit = true;
		return ;
	}

	prevGeneratedPit = false;

  var groundInstance = groundGroup.create( game.world.width, game.world.height - platformHeight, 'ground');
  groundInstance.body.velocity.x = -scrollSpeed;
  groundInstance.body.immovable = true;
  groundInstance.width *= 0.5;

}

function createInitalGround() {

  
  var initialGroundInstance = initialGroundGroup.create(0, game.world.height - platformHeight, 'ground' );
  
  initialGroundInstance.width = game.world.width * 1.2;
  initialGroundInstance.body.velocity.x = -scrollSpeed;
  initialGroundInstance.body.immovable = true;

}

function destroyOldGround() {

  //get rid of old ground once it goes offscreen
}