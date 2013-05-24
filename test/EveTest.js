require(['src/entities/eve'], function(Eve) {
  var eve = new Eve();

  describe("Eve", function() {

    it("should be something ... ", function() {
      expect(eve).toBeDefined();
    });

    describe("spritesheet", function() {
      var spritesheet = eve.spritesheet;

      it("should have animations", function() {
        expect(spritesheet.getAnimations().length).toBeGreaterThan(0);
      });

      it("should stand", function() {
        expect(spritesheet.getAnimations().indexOf("stand")).toBeGreaterThan(-1);
      });

      it("should walk right", function() {
        expect(spritesheet.getAnimations().indexOf("walk_right")).toBeGreaterThan(-1);
      });

      it("should walk left", function() {
        expect(spritesheet.getAnimations().indexOf("walk_left")).toBeGreaterThan(-1);
      });
    });

    describe("animations", function() {
      var animation = eve.animation;

      it("should stand", function() {
        expect(animation.currentAnimation).toBe("stand");
      });

      it("should walk right", function() {
        eve.moveRight();
        expect(animation.currentAnimation).toBe("walk_right");
      });

      it("should walk left", function() {
        eve.moveLeft();
        expect(animation.currentAnimation).toBe("walk_left");
      });
    });

  });
});
