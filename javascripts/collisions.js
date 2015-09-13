function placeHolder() {

}

function playerVsPlatCollide() {
  if (player.body.velocity.y > 0) {
    return true;
  }
  else {
    return false;
  }
}

function playerVsGroundCollide() {
	if (inHell) {
    restartGame();
		return false;
	}
	else {
    return true;
  }
}

function restartGame() {
  score = 0;
  inHeaven = false;
  groundLevel = true;
  inHell = false;
  midJump = false;

  player.kill();
  createPlayer();
  toGround();
}