define([
  'easel'
], function(stage){
  var mesh = function(options) {
        var x = options.x || 0,
            y = options.y || 0,
            w = options.w || 0,
            h = options.h || 0,
            a = options.isVisible || 0,
            _mesh = new createjs.Shape();

        _mesh.graphics.beginFill("#ff0000").drawRect(x, y, w, h);
        _mesh.alpha = a;
        _mesh.name = options.name || 'navmesh';

        return _mesh;
      };

  return mesh;
});
