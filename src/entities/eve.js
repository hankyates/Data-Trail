define([
  'src/sprite',
  'backbone',
  'underscore'
], function(Sprite){
  var Eve = Backbone.Model.extend({

        defaults:{
        }, 
        
        initialize: function(){
          this.spritesheet = new Sprite({
            width: 75,
            height: 220,
            frames: 9,
            image: 'eve.png',
            animations: {'walk_right': [0, 9], 'walk_left': [0, 9]}
          }).spritesheet;
        }

      });

  return Eve;

});
