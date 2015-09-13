function updateScore() {
  game.world.remove(scoreLabel);
  score++;
  scoreLabel = game.add.text(windowW/2, windowH/10, score, { font: 'bold 20pt Comic Sans MS', fill: '#ffffff' }); 

}