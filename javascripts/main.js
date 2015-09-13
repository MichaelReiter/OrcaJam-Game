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
  
  createInitalGround();

  createPlayer();

}

function update() {

  game.world.remove(scoreLabel);
  score++;
  scoreLabel = game.add.text(windowW/2, windowH/10, score, { font: 'bold 20pt Comic Sans MS', fill: '#ffffff' }); 

  changeNextPlatformTime(platformGenTimer);

  game.physics.arcade.collide(initialGroundGroup, player);
  game.physics.arcade.collide(groundGroup, player);
  game.physics.arcade.collide(platformsGroup, player);

  enablePlayerJump();
  enableZoneChange();

  destroyOldGround();
  destroyOldPlatforms();
 
}
