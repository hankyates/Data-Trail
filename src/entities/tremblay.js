Tremblay = Backbone.Model.extend({
  defaults:{
    entity: Crafty.e("2D, Canvas, Multiway, Keyboard")
  },
  initialize: function(){
    var entity = this.get('entity');

    entity
      .attr({x: 400, y: 400, z: 300, w: 75})
      .multiway(2, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
      .bind('EnterFrame', function(e){

      })
      .bind('Click', function(){
        
      })
      .setName('Tremblay');

      entity.origin(400, 400);
  }
});
