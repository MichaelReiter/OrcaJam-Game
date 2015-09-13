var game = new Phaser.Game(windowW, windowH, Phaser.CANVAS, '', {
  preload: preload,
  create: create,
  update: update
});

var scoreLabel, background;

preload();

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  background = game.add.sprite(0, 0, 'background');
  background.height = game.height;
  background.width = game.width;

  initializeGroundGroups();
  initializePlatformGroup();

  startPlatformGeneration();
  startGroundGeneration();
  startScoreCounting();
  
  createInitalGround((windowH - platformHeight), platformSprite, 1);

  createPlayer();

  toGround();
}

function update() {
  if( !inTransition ) {
    changeNextPlatformTime();
  }
  else {
   console.log("in transition");
 }

  game.physics.arcade.collide(initialGroundGroup, player);
  game.physics.arcade.collide( platformsGroup, player, placeHolder, playerVsPlatCollide );
  game.physics.arcade.collide(groundGroup, player, placeHolder, playerVsGroundCollide);

  enablePlayerJump();
  enableZoneChange();
  enablePlayerDeathByLeftBoundary();
  // enablePauseGame();

  destroyOldGround();
  destroyOldPlatforms();
}