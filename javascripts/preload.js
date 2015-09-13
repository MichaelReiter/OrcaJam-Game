var scrollSpeed;
var windowH = window.innerHeight;
var windowW = window.innerWidth;
var score = 0;
var groundLevel = true;
var inHell = false;
var inHeaven = false;
var inTransition = false;
var updateCounter = 0;

function preload() {
  game.load.image('background', 'assets/background.png');
  game.load.image('background-hell', 'assets/background-hell.png');
  game.load.image('background-heaven', 'assets/background-heaven.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('ground-hell', 'assets/platform-hell.png');
  game.load.image('ground-heaven', 'assets/platform-heaven.png');
  game.load.image('lava', 'assets/lava.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}
