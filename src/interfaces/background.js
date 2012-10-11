Background = Backbone.Model.extend({
  defaults: {
    entity: null
  },
  initialize: function(){
    var model = this;
    var entity = Crafty.e("2D, Canvas, Background, Image");

    entity
      .attr({x: 0, y: 0, z: 200, w: 1366, h: 768})
      .image('public/images/scene_bg_1.png')
      .setName('Scene Background');

    model.set({'entity' : entity });
  }
});
