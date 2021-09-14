import Phaser from 'phaser';
import BootScene from './Scenes/BootScene'
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import SceneMain from './Scenes/SceneMain';
import SceneGameOver from './Scenes/SceneGameOver'
import LeaderBoard from  './Scenes/LeaderBoard'
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
    TitleScene,
    LeaderBoard,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
};

let game = new Phaser.Game(config);