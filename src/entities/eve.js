Eve = Backbone.Model.extend({
  defaults:{
    entity: Crafty.e("2D, Canvas, Multiway, Keyboard, Eve, SpriteAnimation")
  },
  initialize: function(){
    var entity = this.get('entity');

    entity
      .attr({x: 650, y: 20, z: 300, w: 75, h:220})
      .multiway(2, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
      .bind('KeyDown', function(e) {
        if(e.key == Crafty.keys['RIGHT_ARROW']){
          this.animate('walk_right', 0, 0, 9)
          this.animate('walk_right', 0, -1)
        }
      })
      .bind('KeyUp', function(e) {
          this.stop();
      })
      .bind('EnterFrame', function(e){

      })
      .bind('Click', function(){
        
      })
      .setName('Eve');
  }
});
