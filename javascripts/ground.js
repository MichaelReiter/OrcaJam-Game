pitGenChance = 5; // a variable from 0 - 9 that controls chance of a pit being generated
var prevGeneratedPit = false;

function createGround() {

	if( Math.random() < ( pitGenChance / 10 ) && !prevGeneratedPit ) {
		prevGeneratedPit = true;
		return ;
	}

	prevGeneratedPit = false;

	ground = game.add.group();

	ground.enableBody = true;

	game.physics.arcade.enableBody(ground);

	var ground = ground.create( game.world.width, game.world.height - platformHeight, 'ground' );

	ground.body.velocity.x = -150;

}

function createInitalGround() {

	var initialGround = game.add.group();
	
	initialGround.enableBody = true;

	game.physics.arcade.enableBody(initialGround);
	
	initialGround = initialGround.create(0, game.world.height - platformHeight, 'ground' );

	initialGround.width = game.world.width;

	initialGround.body.velocity.x = -150;
}