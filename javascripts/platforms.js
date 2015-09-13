var platformHeight = 32;
var prevPlatYPos = ( ( windowH / 16 ) * 3 );
var minPlatformYDist = ( windowH / 20 );
var maxPlatformYDist = ( ( windowH / 16 ) * 3 );
var platformCeilingOffset = ( windowH * 0.05 ); //this is the distance between the height of the game and the tallest platform
var platformFloorOffset = ( windowH * 0.2 ); //this is the distance between the bottom of the game and the lowest platform

function initializePlatformGroup() {
  groundLevelPlatforms = game.add.group();
  groundLevelPlatforms.enableBody = true;
  game.physics.arcade.enable(groundLevelPlatforms);
  platformsGroup = groundLevelPlatforms;
}

function createPlatform() {

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
  while (true) {
    var bias = ( player.position.y / windowH );
    bias = ( 1 - bias );
    bias *= 2;
    var randBiased = Math.pow( Math.random(), bias );
    var platYPos =  platformCeilingOffset + ( randBiased * ( game.height - platformCeilingOffset - platformFloorOffset ) );
    var temp1 = Math.abs(platYPos);
    var temp2 = Math.abs(prevPlatYPos);
    var diffFromPrevPos = Math.abs( temp1 - temp2 );

    if ( diffFromPrevPos > minPlatformYDist )
      if ( diffFromPrevPos < maxPlatformYDist )
        break;
  }

  var ledge = platformsGroup.create( game.world.width, platYPos, groundSprite );

  ledge.body.velocity.x = -scrollSpeed;
  ledge.body.immovable = true;
  ledge.width = 200;

  prevPlatYPos = platYPos;
}

function destroyOldPlatforms() {
  //get rid of old platforms once they goes offscreen
  platformsGroup.forEach(function(platform) {
    if (platform.x < -platform.width) {
      platform.kill();
    }
  });
}
