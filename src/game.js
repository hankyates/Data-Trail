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
      easel: 'src/libs/easeljs-0.5.0.min',
      tween: 'src/libs/tweenjs-0.3.0.min',
      sound: 'src/libs/soundjs-0.3.0.min',
      preload: 'src/libs/preloadjs-0.2.0.min',
      underscore: 'src/libs/underscore-1.3.4.min',
      backbone: 'src/libs/backbone-0.9.2.min'
    }   
  });

  require([
    "src/stage",
    "src/sprites",
    "src/scenes/main"
  ], function() {

  });// require sprites and scene
};
