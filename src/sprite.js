define([
  'easel',
  'backbone',
  'underscore'
], function(){
  var Sprite = Backbone.Model.extend({
    defaults: {
      images_path: 'public/images/',
      url: function(){
        return this.images_path + this.image;
      }
    },

    initialize: function(){
      var attributes = this.attributes;
          ss = new createjs.SpriteSheet({
            images: [attributes.url()],
            frames: {
              width: attributes.width,
              height: attributes.height
            },
            animations: attributes.animations
          });

      this.spritesheet = ss;
    }

  });

  return Sprite;

});
