Sprite = Backbone.Model.extend({
  defaults: {
    width: 211,
    height: 117,
    images_path: 'public/images/',
    image: 'ufo.png',
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

TremblaySprite = new Sprite({
  width: 75,
  height: 220,
  image: 'tremblay.png'
});
