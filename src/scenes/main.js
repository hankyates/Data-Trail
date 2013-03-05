require([
  "src/stage",
  "src/entities/eve",
  "src/interfaces/background",
  "easel"
], function(stage, Eve, Background) {
  var eve = new Eve(),
      bg = new Background(),
      animation = new createjs.BitmapAnimation(eve.spritesheet);

  animation.x = 5;
  animation.y = 5;
  animation.gotoAndPlay('walk_left');
  stage.addChild(bg.spritesheet);
  stage.addChild(animation);
  stage.update();

});
