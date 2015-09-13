var platformHeight = 32;
var prevPlatYPos = ( ( windowH / 16 ) * 3 );
var minPlatformYDist = ( windowH / 16 );
var maxPlatformYDist = ( ( windowH / 18 ) * 3 );
var platformCeilingOffset = ( windowH * 0.05 ); //this is the distance between the height of the game and the tallest platform
var platformFloorOffset = ( windowH * 0.12 ); //this is the distance between the bottom of the game and the lowest platform
var biasTowardsBottomMultiplier = 3;
var biasTowardsTopMultiplier = 15;
var platformWidth = 200;

function initializePlatformGroup() {
  platformsGroup = game.add.group();
  platformsGroup.enableBody = true;
  game.physics.arcade.enable(platformsGroup);
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

    // flipping percentage value so bias is not oppisite to where player is
    bias = ( 1 - bias );
    // expanding bias by 2 to create 
    bias *= 2;

    // if ( bias > 1 ) {
    //   bias *=  biasTowardsBottomMultiplier;
    // }
    // else {
    //   bias /= biasTowardsTopMultiplier;
    // }

    var randBiased = Math.pow(Math.random(), bias);

    var platYPos =  platformCeilingOffset + ( randBiased * ( game.height - platformCeilingOffset - platformFloorOffset ) );
    var temp1 = Math.abs(platYPos);
    var temp2 = Math.abs(prevPlatYPos);
    var diffFromPrevPos = Math.abs( temp1 - temp2 );

    if ( diffFromPrevPos > minPlatformYDist ) {
      if ( diffFromPrevPos < maxPlatformYDist ) {
        break;
      }
    }
  }

  var ledge = platformsGroup.create(game.world.width, platYPos, platformSprite);

  ledge.body.velocity.x = -scrollSpeed;
  ledge.body.immovable = true;
  ledge.width = platformWidth;

  prevPlatYPos = platYPos;
}

function createHeightedPlatform(height, xPos, width) {
  var ledge = platformsGroup.create(game.world.width, height, platformSprite);
  ledge.body.velocity.x = -scrollSpeed;
  ledge.body.immovable = true;
  ledge.width = width;
}

function destroyOldPlatforms() {
  //get rid of old platforms once they goes offscreen
  platformsGroup.forEach(function(platform) {
    if (platform.x < -platform.width) {
      platform.kill();
    }
  });
}

function killPlatformsAndGround() {
  platformsGroup.forEach(function(platform) {
    platform.kill();
  });

  groundGroup.forEach(function(ground) {
    ground.kill();
  });
}
