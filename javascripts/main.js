var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, '', {
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

  createInitalGround();

  groundGenTimer = game.time.events.loop(0 , createGround, this);
  platformGenTimer = game.time.events.loop(Phaser.Timer.SECOND * 2, createPlatform, this);
  groundGenTimer.delay = Phaser.Timer.SECOND;

  // platformGenTimer = game.time.events.loop
  
  // createPlatform();
  
  // createGround();

  createPlayer();

}

function update() {

  // game.physics.arcade.collide(player, platforms);
  
  game.physics.arcade.collide(initialGroundGroup, player);
  game.physics.arcade.collide(groundGroup, player );
  game.physics.arcade.collide( platformsGroup, player );

  destroyOldGround();

  enablePlayerJump();

  destroyOldGround();
  
  changeNextPlatformTime( platformGenTimer );
 
}
