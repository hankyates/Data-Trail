define([
  'src/stage',
  'easel'
], function(stage){
  var Eve = function(options){
        var self = this;

        // var options = options || {};
        if(!options) options = {};

        this.spritesheet = new createjs.SpriteSheet({
          name: 'eve',
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

        // I think this is broken with require. :'(
        //createjs.SpriteSheetUtils.addFlippedFrames(this.spritesheet, true, false, false);

        this.animation = new createjs.BitmapAnimation(this.spritesheet);
        this.animation.x = options.x || 0;
        this.animation.y = options.y || 0;

        this.moveRight = function() {
          if(this.animation.currentAnimation != 'walk_right')
            this.animation.gotoAndPlay('walk_right');
        };

        this.moveLeft = function() {
          if(this.animation.currentAnimation != 'walk_left'){
            this.animation.gotoAndPlay('walk_left');
          }
        };

        this.stand = function() {
          if(this.animation.currentAnimation != 'stand')
            this.animation.gotoAndStop('stand'); 
        };

        this.stand();

        this.bindEvents = function() {
          var _navmesh = stage.getChildByName('navmesh');
          this.animation.addEventListener('tick', function(event) {
            if(self.animation.currentAnimation === 'walk_right')
              self.animation.x += 5;
          });

          this.animation.addEventListener('tick', function(event) {
            if(self.animation.currentAnimation === 'walk_left')
              self.animation.x -= 5;
          });

          this.animation.addEventListener('tick', function(event) {
            var pt = _navmesh;
            self.animation.hitTest();
          });

          window.onkeydown = function(event) {
            var key = event.keyCode;
              if(key === 39) self.moveRight();
              if(key === 37) self.moveLeft();
          };

          window.onkeyup = function(event) {
            self.stand();
          };


        };

        this.initialize = function() {
         this.bindEvents();
        };

        this.initialize();

      };

  return Eve;

});
