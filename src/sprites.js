define([
  'src/sprite'
  ], function(Sprite){
    var Sprites = Backbone.Collection.extend({
          model: Sprite
        });

    return Sprites;

  });
