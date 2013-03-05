define([
  'src/sprite',
  'backbone'
],function(Sprite){
  var Background = Backbone.Model.extend({

        defaults: {

        },

        initialize: function(){
          this.spritesheet = new Sprite({
            width: 1024,
            height: 576,
            frames: 1,
            image: 'scene_1.png'
          }).spritesheet;
        }

      });

  return Background;

});
