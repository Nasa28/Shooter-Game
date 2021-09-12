import 'phaser';
export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super({ key: "PreloaderScene" })
  }
  preload () {
    this.load.image("sprBg0", "assets//img/sprBg0.png");
this.load.image("sprBg1", "assets/img/sprBg1.png");
this.load.spritesheet("sprExplosion", "assets/img/sprExplosion.png", {
  frameWidth: 32,
  frameHeight: 32
});
this.load.spritesheet("sprEnemy0", "assets/img/sprEnemy0.png", {
  frameWidth: 16,
  frameHeight: 16
});
this.load.image("sprEnemy1", "assets/img/sprEnemy1.png");
this.load.spritesheet("sprEnemy2", "assets/img/sprEnemy2.png", {
  frameWidth: 16,
  frameHeight: 16
});
this.load.image("sprLaserEnemy0", "assets/img/sprLaserEnemy0.png");
this.load.image("sprLaserPlayer", "assets/img/sprLaserPlayer.png");
this.load.spritesheet("sprPlayer", "assets/img/sprPlayer.png", {
  frameWidth: 16,
  frameHeight: 16
});

this.load.audio("sndExplode0", "assets/audio/sndExplode0.wav");
this.load.audio("sndExplode1", "assets/audio/sndExplode1.wav");
this.load.audio("sndLaser", "assets/audio/sndLaser.wav");
  }

  create () {

    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprEnemy2",
      frames: this.anims.generateFrameNumbers("sprEnemy2"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "sprExplosion",
      frames: this.anims.generateFrameNumbers("sprExplosion"),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: "sprPlayer",
      frames: this.anims.generateFrameNumbers("sprPlayer"),
      frameRate: 20,
      repeat: -1
    });

    this.sfx = {
      explosions: [
      this.sound.add("sndExplode0"),
      this.sound.add("sndExplode1")
      ],
      laser: this.sound.add("sndLaser")
      };
  
  }
};