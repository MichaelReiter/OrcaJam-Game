var platformHeight = 32;
var prevPlatYPos = 2000;
var minPlatformYDist = 150;
var platformCeilingOffset = 200;
var platformFloorOffset = 10;


function initializePlatformGroup() {
  platformsGroup = game.add.group();

  platformsGroup.enableBody = true;

  game.physics.arcade.enable(platformsGroup);

}

function createPlatform() {

  do {
    var platYPos =  platformCeilingOffset + ( Math.random() * ( game.world.height - platformCeilingOffset - platformFloorOffset ) );
    console.log(platYPos);
  }
  while ( Math.abs( platYPos - prevPlatYPos ) < minPlatformYDist )

    prevPlatYPos = platYPos;

  // var platformWidth = Math.floor( Math.random() );

  var ledge = platformsGroup.create( game.world.width, platYPos, 'ground' );

  // ledge.scale.setTo(platformWidth, 1);

  ledge.body.velocity.x = -150;

  ledge.body.immovable = true;

}

function changeNextPlatformTime(platTimer) {

  var platformGenTime = ( ( Math.random() * 3 * Phaser.Timer.SECOND ) + 2 );
  platTimer.delay = platformGenTime;


}
