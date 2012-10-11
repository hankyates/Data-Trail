Crafty.scene("main", function() {
  require([
    "src/entities/tremblay",
    "src/interfaces/background"
  ], function() {    
    new Tremblay();
    new Background();
  });
});
