window.onload = function() {
	Crafty.init(1366, 768);
	Crafty.canvas.init();
	
	require([
	"src/sprite",
	"src/sprites",
  "src/scenes/main"
	], function() {
		var sprites = new Sprites(TremblaySprite),
		sprite_image_paths = sprites.map(function(sprite){
			return sprite.attributes.url();
		});

    Crafty.load(sprite_image_paths, function() { // On Load
      require([
      "src/components/MouseHover",
      "src/entities/person"
      ],function() {
        Crafty.scene('main');
      });// require entities
    });// Crafty load sprites

    Crafty.background('#666');

  });// require sprites and scene
};
