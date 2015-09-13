
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
	if ( inHell ) {
		player.kill();
		return false;
	}
	else return true;
}