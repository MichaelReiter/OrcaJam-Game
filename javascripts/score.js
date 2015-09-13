function updateScore() {

	if( inHeaven ) {
		score++;
	}
	if( inHell ) {
		score--;
	}
	if( groundLevel ) {
		// do nothing
	}
  scoreLabel.text = score;

}