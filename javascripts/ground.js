var pitGenChance = 3; // a variable from 0 - 9 that controls chance of a pit being generated
var prevGeneratedPit = false;

function initializeGroundGroups() {
	groundGroup = game.add.group();
  groundGroup.enableBody = true;
  game.physics.arcade.enableBody(groundGroup);
 
  initialGroundGroup = game.add.group();
  initialGroundGroup.enableBody = true;
  game.physics.arcade.enableBody(initialGroundGroup);
}

function createGround() {

	// prev generated pit is true if a pit was generated in the last call of createGround, else it is false
	// the pitGenChange is divided by ten to become a decimal between 0 and 1, between Math.random() generates a number between
	// 0 and 1. if the random number generated is less than the pitGenChance number, a pit is generated
	// the higher the pitGenCHance number becomes, the greater the chance of the random number being less than it becomes, and a pit
	// is more likely to be generated
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
  initialGroundInstance.width = game.world.width * 1.3;
  initialGroundInstance.body.velocity.x = -scrollSpeed;
  initialGroundInstance.body.immovable = true;
}

function destroyOldGround() {
  //get rid of old ground once it goes offscreen
  groundGroup.forEach(function(ground) {
    if (ground.x < -ground.width) {
      ground.kill();
    }
  });
}