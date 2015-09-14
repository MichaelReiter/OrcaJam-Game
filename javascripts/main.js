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

  initializeGroundGroup();
  initializePlatformGroup();

  // startPlatformGeneration();
  // startGroundGeneration();
  updateSpeed(400);
  createPlayer();
  createInitalGround((windowH - platformHeight), 'ground', 1);
  startScoreCounting();

  toGround();
}

function update() {
  game.physics.arcade.collide(initialGroundGroup, player);
  game.physics.arcade.collide( platformsGroup, player, placeHolder, playerVsPlatCollide );
  game.physics.arcade.collide(groundGroup, player, placeHolder, playerVsGroundCollide);

  enablePlayerJump();
  enableZoneChange();
  enablePlayerDeathByLeftBoundary();

  destroyOldGround();
  destroyOldPlatforms();
  
  if (groundLevel) {
    groundGenUpdateCount = 7;
    platformGenUpdateCount = 50;
  }
  if (inHell) {
    groundGenUpdateCount = 5;
    platformGenUpdateCount = 40;
  }
  if (inHeaven) {
    groundGenUpdateCount = 1;
    platformGenUpdateCount = 30;
  }
  updateCounter++;

  if(!inTransition) {

    if( !inHeaven && updateCounter % groundGenUpdateCount == 0 ) {
      createGround();
    }

    if( updateCounter % platformGenUpdateCount == 0 ) {
      createPlatform();
    }
  }
}