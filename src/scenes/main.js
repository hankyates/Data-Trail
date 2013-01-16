require([
  "src/entities/eve",
  "src/interfaces/background"
], function(Eve, Background) {
  var eve = new Eve(),
      bg = new Background(),
      animation = new createjs.BitmapAnimation(eve.spritesheet),
      text = new createjs.Text('whatever', "36px Arial", "#FFF");

  animation.x = 75;
  animation.y = 75;
  text.x = 75;
  text.y = 75;
  animation.gotoAndPlay('walk_left');
  stage.addChild(animation);
  stage.addChild(text);
  console.log(stage);
  stage.update();

});
