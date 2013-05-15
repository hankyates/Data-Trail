define([
  'easel'
], function(){
  var Eve = function(){
        this.spritesheet = new createjs.SpriteSheet({
          images: ['images/eve.png'],
          frames: {
            width: 75,
            height: 220
          },
          animations: {'walk_right': [0, 9], 'walk_left': [0, 9]}
        });
      };

  return Eve;

});
