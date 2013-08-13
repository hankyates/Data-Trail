define([
  'easel'
], function(){
  var stage = new createjs.Stage(document.getElementById('game'));

  createjs.Ticker.addEventListener('tick', stage);
  window.stage = stage;

  return stage;
});
