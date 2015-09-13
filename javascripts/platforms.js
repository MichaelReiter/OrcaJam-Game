var platformHeight = 32;
var prevPlatYPos = ( ( windowH / 16 ) * 3 );
var minPlatformYDist = ( windowH / 20 );
var maxPlatformYDist = ( ( windowH / 16 ) * 3 );
var platformCeilingOffset = ( windowH * 0.05 ); //this is the distance between the height of the game and the tallest platform
var platformFloorOffset = ( windowH * 0.2 ); //this is the distance between the bottom of the game and the lowest platform

function initializePlatformGroup() {
  platformsGroup = game.add.group();
  platformsGroup.enableBody = true;
  game.physics.arcade.enable(platformsGroup);
}

function createPlatform() {
  while(true) {

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
    var bias = ( player.position.y / windowH );
    bias = ( 1 - bias );
    bias *= 2;
    var randBiased = Math.pow( Math.random(), bias );
    var platYPos =  platformCeilingOffset + ( randBiased * ( game.height - platformCeilingOffset - platformFloorOffset ) );
    var temp1 = Math.abs(platYPos);
    var temp2 = Math.abs(prevPlatYPos);
    var diffFromPrevPos = Math.abs( temp1 - temp2 );

    console.log("temp1 "); 
    console.log(temp1);
    console.log("temp2 "); 
    console.log(temp2);
    console.log("diffFromPrevPos "); 
    console.log(diffFromPrevPos);

    if( diffFromPrevPos > minPlatformYDist )
      if( diffFromPrevPos < maxPlatformYDist )
        break;
  }

  var ledge = platformsGroup.create( game.world.width, platYPos, 'ground' );

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
