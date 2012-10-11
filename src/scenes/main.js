Crafty.scene("main", function() {
  require([
    "src/entities/tremblay",
    "src/interfaces/info"
  ], function() {    
    sc['tremblay'] = new Tremblay();
    infc['info'] = new Info();
  });
});
