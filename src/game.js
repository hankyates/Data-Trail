window.onload = function() {

  stage = new createjs.Stage(document.getElementById('game'));

  require([
    "src/sprites",
    "src/scenes/main"
  ], function(Sprites) {

  });// require sprites and scene
};
