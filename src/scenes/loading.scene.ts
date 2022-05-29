import { Application, Container, Sprite } from "pixi.js";
import { Spine } from "pixi-spine";

class LoadingScene extends Container {
  app: Application;
  logo: Sprite;
  fire: Spine | undefined;

  constructor(app: Application) {
    super();
    this.app = app;
    this.update = this.update.bind(this);

    const { logoRes, fireRes } = this.app.loader.resources;

    this.logo = new Sprite(logoRes.texture);
    this.addChild(this.logo);

    if (fireRes?.spineData) {
      this.fire = new Spine(fireRes.spineData);
      this.addChild(this.fire);
      this.fire.x = 150;
      this.fire.y = 150;
      this.fire.state.setAnimation(0, "fly", true);
    }

    // Handle update
    app.ticker.add(this.update);
  }

  update() {
    // this.sprite.x += 1;
    // this.sprite.y += 1;
  }
}

export default LoadingScene;
