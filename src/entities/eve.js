define([
  'easel'
], function(){
  var Eve = function(options){
        var self = this;

        // var options = options || {};
        if(!options) options = {};

        this.spritesheet = new createjs.SpriteSheet({
          images: ['images/eve.png'],
          frames: {
            width: 75,
            height: 220
          },
          animations: {
            walk_right: [0, 9],
            walk_left: [10, 18],
            stand: 0
          }
        });

        this.animation = new createjs.BitmapAnimation(this.spritesheet);
        this.animation.x = options.x || 0;
        this.animation.y = options.y || 0;

        this.moveRight = function() {
          if(this.animation.currentAnimation != 'walk_right')
            this.animation.gotoAndPlay('walk_right');
        };

        this.moveLeft = function() {
          if(this.animation.currentAnimation != 'walk_left')
            this.animation.gotoAndPlay('walk_left');
        };

        this.stand = function() {
          if(this.animation.currentAnimation != 'stand')
            this.animation.gotoAndStop('stand'); 
        };

        this.stand();

        window.onkeydown = function(event) {
          var key = event.keyCode;
            if(key === 39) self.moveRight();
            if(key === 37) self.moveLeft();
        };

        window.onkeyup = function(event) {
          self.stand(); 
        };

      };

  return Eve;

});
