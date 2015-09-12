var platformHeight = 32;
var prevPlatYPos = 2000;
var minPlatformYDist = 150;
var platformCeilingOffset = ( windowH * 0.1 );
var platformFloorOffset = ( windowH * 0.1 );

function initializePlatformGroup() {
  platformsGroup = game.add.group();
  platformsGroup.enableBody = true;
  game.physics.arcade.enable(platformsGroup);
}

function createPlatform() {
  do {
    var platYPos =  platformCeilingOffset + ( Math.random() * ( game.height - platformCeilingOffset - platformFloorOffset ) );
    console.log(platformCeilingOffset);
    console.log(platformFloorOffset);
  }
  while ( Math.abs( platYPos - prevPlatYPos ) < minPlatformYDist )

  prevPlatYPos = platYPos;
  // var platformWidth = Math.floor( Math.random() );

  var ledge = platformsGroup.create( game.world.width, platYPos, 'ground' );
  ledge.body.velocity.x = -scrollSpeed;
  ledge.body.immovable = true;
  ledge.width = 200;
}

function changeNextPlatformTime(platTimer) {
  var platformGenTime = ( ( Math.random() * 3 * Phaser.Timer.SECOND ) + Phaser.Timer.SECOND );
  platTimer.delay = platformGenTime;
}
