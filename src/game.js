window.onload = function() {

  require.config({
    shim: {
      easel: {
        exports: 'createjs'
      },
      tween: {
        deps: ['easel'],
        exports: 'Tween'
      },
      sound: {
        exports: 'SoundJS'
      },
      preload: {
        exports: 'PreloadJS'
      },
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore'],
        exports: 'Backbone'
      }
    },
    paths: {
      easel: 'src/libs/easeljs-0.6.0.min',
      tween: 'src/libs/tweenjs-0.3.0.min',
      sound: 'src/libs/soundjs-0.3.0.min',
      preload: 'src/libs/preloadjs-0.2.0.min',
      underscore: 'src/libs/underscore-1.4.4.amd',
      backbone: 'src/libs/backbone-0.9.10.amd'
    }   
  });

  require([
    "src/stage",
    "src/scenes/main"
  ], function() {
    createjs.Ticker.addEventListener('tick', stage);
  });// require sprites and scene
};
