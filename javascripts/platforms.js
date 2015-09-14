var platformHeight = 32;
var prevPlatYPos = ( windowH - (windowH / 16) );
var minPlatformYDist = ( windowH / 16 );
var maxPlatformYDist = ( ( windowH / 24 ) * 3 );
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
  do {
    platYPos = Math.random() * windowH;
    var platDiff = calcPlatformDistDiff(prevPlatYPos, platYPos);
  }
  while( platDiff < minPlatformYDist || platDiff > maxPlatformYDist || platYPos > windowH - 50)

  var ledge = platformsGroup.create(game.world.width, platYPos, platformSprite);

  ledge.body.velocity.x = -scrollSpeed;
  ledge.body.immovable = true;
  ledge.width = platformWidth;

  prevPlatYPos = platYPos;
}

function calcPlatformDistDiff(prevPlatY, curPlatY) {
  var diff = Math.abs( prevPlatY - curPlatY );

  return diff;
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
