import Phaser from 'phaser';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import GameScene from './Scenes/GameScene';

const config = {
  type: Phaser.WEBGL,
  width: 840,
  height: 640,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    BootScene,
    PreloaderScene,
    TitleScene,
    GameScene,
  ],
  pixelArt: true,
  roundPixels: true,
};

window.game = new Phaser.Game(config);