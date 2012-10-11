Info = Backbone.Model.extend({
  defaults: {
    text : "Move object with arrows key",
    entity: null
  },
  initialize: function(){
    var model = this;
    var entity = Crafty.e("2D, DOM, Text");

    entity
      .attr({x: 50, y: 50, z: 1000, w: 400})
      .text(model.get('text'))
      .textColor('#fff')
      .textFont({'size' : '24px', 'family': 'Arial'})
      .bind('Click', function(){
                
      })
      .setName('Text Interface');

    model.set({'entity' : entity });
  }
});
