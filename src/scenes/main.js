Crafty.scene("main", function() {
  require([
    "src/entities/eve",
    "src/interfaces/background"
  ], function() {    
    new Eve();
    new Background();
  });
});
