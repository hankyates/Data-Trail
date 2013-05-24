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
    }
  },
  paths: {
    easel: '../lib/easeljs-0.6.0.min',
    tween: '../lib/tweenjs-0.3.0.min',
    sound: '../lib/soundjs-0.3.0.min',
    preload: '../lib/preloadjs-0.2.0.min'
  }
});

require([
  'src/stage',
  'src/scenes/main'
], function(stage) {
  createjs.Ticker.addEventListener('tick', stage);
});// require sprites and scene
