Sprite = Backbone.Model.extend({
  defaults: {
    images_path: 'public/images/',
    url: function(){
      return this.images_path + this.image;
    }
  },
  initialize: function(){
    var attributes = this.attributes;
    Crafty.sprite(
      attributes.width,
      attributes.height,
      attributes.url(),
      attributes.component
    );
    return this;
  }
});

EveSprite = new Sprite({
  width: 75,
  height: 220,
  image: 'eve.png',
  component: {
    Eve: [0,0]
  }
});
