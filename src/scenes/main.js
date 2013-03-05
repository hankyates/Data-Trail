require([
  "src/stage",
  "src/entities/eve",
  "easel"
], function(stage, Eve, Background) {
  var eve = new Eve(),
      bg = new createjs.Bitmap('public/images/scene_1.png'),
      animation = new createjs.BitmapAnimation(eve.spritesheet);

  animation.x = 5;
  animation.y = 5;
  animation.gotoAndPlay('walk_left');
  stage.addChild(bg);
  stage.addChild(animation);
  stage.update();

});
