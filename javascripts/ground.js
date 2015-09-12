function createGround() {

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
	
	initialGround = initialGround.create(0, game.world.height - 50, 'ground' );

	initialGround.width = game.world.width;

	initialGround.body.velocity.x = -150;
}