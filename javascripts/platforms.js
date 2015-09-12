var platformHeight = 32;
var prevPlatYPos = 2000;
var minPlatformYDist = 150;
var platformCeilingOffset = ( windowH * 0.1 ); //this is the distance between the height of the game and the tallest platform
var platformFloorOffset = ( windowH * 0.1 ); //this is the distance between the bottom of the game and the lowest platform

function initializePlatformGroup() {
  platformsGroup = game.add.group();
  platformsGroup.enableBody = true;
  game.physics.arcade.enable(platformsGroup);
}

function createPlatform() {
  do {

    // visual of platYPos is generated
    // 
    // -------- top of game ----------- 
    // 
    // platform ceiling offset
    // 
    // ---------------------------------------
    // 
    //          
    // game.height - plat ceiling offset - platform floor offset 
    // ( the platforms will appear within this range )
    // 
    // 
    // -----------------------------------
    // 
    // -------- bottom of game------------------
    
    var platYPos =  platformCeilingOffset + ( Math.random() * ( game.height - platformCeilingOffset - platformFloorOffset ) );
  }
  while ( Math.abs( platYPos - prevPlatYPos ) < minPlatformYDist )

  prevPlatYPos = platYPos;

  var ledge = platformsGroup.create( game.world.width, platYPos, 'ground' );
  ledge.body.velocity.x = -scrollSpeed;
  ledge.body.immovable = true;
  ledge.width = 200;
}

function changeNextPlatformTime(platTimer) {

  // Math.random * 3 seconds generates a number between 0 and 3, the random factor in when the next platform will come
  // phaser.Timer.SECOND is the offset added to the random factor, so the next platform will not come for at LEAST a second
  var platformGenTime = ( ( Math.random() * 3 * Phaser.Timer.SECOND ) + Phaser.Timer.SECOND );
  platTimer.delay = platformGenTime;
}
