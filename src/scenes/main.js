Crafty.scene("main", function() {
  require([
    "src/entities/ufo",
    "src/interfaces/info"
  ], function() {    
    sc['ufo'] = new Ufo();
    infc['info'] = new Info();
  });

});
