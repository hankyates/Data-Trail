require([
  "src/stage",
  "src/entities/eve",
  "easel"
], function(stage, Eve) {
  var eve = new Eve({
        x: 550,
        y: 275
      }),
      background = new createjs.Bitmap('images/scene_1.png');

  this.eve = eve;
  stage.addChild(background);
  stage.addChild(eve.animation);
  stage.update();
  stage.update();

});
