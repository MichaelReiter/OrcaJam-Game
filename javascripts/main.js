var game = new Phaser.Game(windowW, windowH, Phaser.CANVAS, '', {
  preload: preload,
  create: create,
  update: update
});

var scrollSpeed = 150;

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

  // 0 is passed to start generation with game start
  groundGenTimer = game.time.events.loop(0, createGround, this);
  platformGenTimer = game.time.events.loop(0, createPlatform, this);

  // generation delay for normal gameplay is set
  groundGenTimer.delay = Phaser.Timer.SECOND;
  platformGenTimer.delay = Phaser.Timer.SECOND * 2;

  // platformGenTimer = game.time.events.loop
  // createPlatform();
  // createGround();

  createPlayer();

}

function update() {

  game.physics.arcade.collide(initialGroundGroup, player);
  game.physics.arcade.collide(groundGroup, player);
  game.physics.arcade.collide(platformsGroup, player);

  destroyOldGround();

  enablePlayerJump();
  enableZoneChange();

  console.log(player.y);

  changeNextPlatformTime(platformGenTimer);
 
}
