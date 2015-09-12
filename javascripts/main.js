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

  createInitalGround();

  groundGenTimer = game.time.events.loop(Phaser.Timer.SECOND * 2, createGround, this);
  platformGenTimer = game.time.events.loop(Phaser.Timer.SECOND * 2, createPlatform, this);

  // platformGenTimer = game.time.events.loop
  
  // createPlatform();
  
  // createGround();

  createPlayer();

}

function update() {

  // game.physics.arcade.collide(player, platforms);
  
  game.physics.arcade.collide( initialGroundGroup, player);

  game.physics.arcade.collide( groundGroup, player );

  // var len = groundGroup.children.length;
  // for(var i = 0; i < len; i ++ ) {
  //   game.physics.arcade.collide(  player, groundGroup.children[i] );
  // }

  destroyOldGround();
  // for (var i = 0; i < groundGroup.children.length; i++) {
  //   if (groundGroup.children[i].x < 0) {
  //     alert("shit");
  //   }
  // }
  // 
  
  changeNextPlatformTime( platformGenTimer );
  // console.log( platformGenTimeScale );
}
