require([
  'src/stage',
  'src/entities/eve',
  'src/navmesh/main'
], function(stage, Eve, mesh) {
  var eve = new Eve({
        x: 550,
        y: 275
      }),
      navmesh = new mesh({
        x: 500,
        y: 450,
        w: 350,
        h: 100,
        isVisible: true,
      }),
      background = document.getElementById('background');


  background.src = 'images/scene_1.png';
  stage.addChild(navmesh);
  stage.addChild(eve.animation);

  eve.animation.hitTest(stage.getChildByName('navmesh').x, stage.getChildByName('navmesh').y);
  console.log(eve.animation.x);
  console.log(eve.animation.y);
  console.log(navmesh.localToGlobal(500, 450));
  console.log(navmesh.graphics.x);
  console.log(navmesh.graphics.y);
  console.log(navmesh);

});
