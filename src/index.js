import Phaser from 'phaser';
import BootScene from './Scenes/BootScene'
import PreloaderScene from './Scenes/PreloaderScene';
import SceneMain from './Scenes/SceneMain';
import SceneGameOver from './Scenes/SceneGameOver'
let config = {
  type: Phaser.WEBGL,
  width: 480,
  height: 640,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    BootScene,
    PreloaderScene,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
};

let game = new Phaser.Game(config);