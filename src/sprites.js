define([
  'src/sprite',
  'backbone',
  'underscore'
], function(Sprite){
  var Sprites = Backbone.Collection.extend({
        model: Sprite
      });

  return Sprites;

});
