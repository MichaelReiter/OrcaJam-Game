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
  
  createInitalGround(windowH - platformHeight);

  createPlayer();

}

function update() {

  updateScore();

  changeNextPlatformTime(platformGenTimer);

  game.physics.arcade.collide(initialGroundGroup, player);
  game.physics.arcade.collide(groundGroup, player);
  game.physics.arcade.collide( platformsGroup, player, placeHolder , playerVsPlatCollide );

  enablePlayerJump();
  enableZoneChange();

  destroyOldGround();
  destroyOldPlatforms();


 
}
