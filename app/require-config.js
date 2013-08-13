require.config({
  shim: {
    easel: {
      exports: 'createjs'
    },
  },
  paths: {
    easel: 'lib/easeljs-0.6.0.min'
  }
});

require(['src/scenes/main']);
