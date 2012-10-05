window.onload = function() {
	Crafty.init(800, 600);
	Crafty.canvas.init();
	
	require([
	"src/sprite",
	"src/sprites"
	], function() {
		var sprite = new Sprite(),
		sprites = new Sprites(sprite),
		sprite_image_paths = sprites.map(function(sprite){
			return sprite.attributes.url();
		});

		//the loading screen - that will be display while assets loaded
		Crafty.scene("loading", function() {
			var loadingText = Crafty.e("2D, Canvas, Text")
					.attr({w: 500, h: 20, x: ((Crafty.viewport.width) / 2), y: (Crafty.viewport.height / 2), z: 2})
					.text('Loading...')
					.textColor('#000')
					.textFont({'size' : '24px', 'family': 'Arial'});

			Crafty.load(sprite_image_paths, function() { // On Load
				require([
				"src/components/MouseHover",
				"src/entities/base/BaseEntity"
			],function() {
				loadingText.destroy();
				Crafty.scene('main');
				});
			},
			function(e) { // On Progress
				loadingText.text('Loading ('+(e.percent.toFixed(0))+'%)');
			});
		});
		
		var scenes = [
			"src/scenes/main"
		];
		
		require(scenes, function(){});
	Crafty.scene("loading");
	});
};
