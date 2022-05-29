import "./index.css";

import * as PIXI from "pixi.js";

import LoadingScene from "./scenes/loading.scene";

type TResource = {
  name: string;
  path: string;
};

const loadAsset = (app: PIXI.Application, res: TResource) => {
  return new Promise<void>((resolve) => {
    app.loader.add(res.name, res.path).load(() => {
      resolve();
    });
  });
};

const assets = [
  { name: "logoRes", path: "slavianica_logo.png" },
  { name: "fireRes", path: "spines/fire/fire.json" },
];

const main = async () => {
  const app = new PIXI.Application();

  for (const asset of assets) {
    await loadAsset(app, asset);
  }

  document.body.appendChild(app.view);
  app.stage.addChild(new LoadingScene(app));
};

main();
