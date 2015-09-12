function createGround() {

	ground = game.add.group();

	ground.enableBody = true;

	game.physics.arcade.enableBody(ground);

	var ground = ground.create( game.world.width, game.world.height - platformHeight, 'ground' );

	ground.body.velocity.x = -150;

}