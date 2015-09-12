var game = new Phaser.Game(windowW, windowH, Phaser.CANVAS, '', {
  preload: preload,
  create: create,
  update: update
});


preload();

function create() {

  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //  A simple background for our game
  var sky = game.add.sprite(0, 0, 'sky');
  sky.height = game.height;
  sky.width = game.width;

  initializeGroundGroups();
  initializePlatformGroup();

  startPlatformGeneration();
  startGroundGeneration();
  
  createInitalGround();

  createPlayer();

}

function update() {

  changeNextPlatformTime( platformGenTimer );

  game.physics.arcade.collide(initialGroundGroup, player);
  game.physics.arcade.collide(groundGroup, player);
  game.physics.arcade.collide(platformsGroup, player);

  destroyOldGround();

  enablePlayerJump();
  enableZoneChange();
  accelerateToRunningPosition();


  destroyOldGround();
 
}
