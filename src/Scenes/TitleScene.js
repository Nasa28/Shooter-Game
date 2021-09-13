import Phaser from 'phaser';
import ScrollingBackground from '../Entities/Scrolling';
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super({key:'TitleScene'});
  }
  preload () {
  }
  create () {
    
    this.add.text(2, this.game.config.height - 2,
      `PLAYER CONTROL KEYS:\n\nMOVE LEFT: [←]\n\nMOVE RIGHT: [→]\n\nMOVE DOWN: [↓]\n\nMOVE UP: [↑]\n\nSHOOT: [SPACEBAR]`)
      .setOrigin(0, 1);
    this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE SHOOTER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#fffffa',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown"),
      music: this.sound.add("music")
    };
    this.sfx.music.play();
    // this.scene.start("SceneMain");
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
      
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on("pointerover", () => {
    this.btnPlay.setTexture("sprBtnPlayHover"); // set the button texture to sprBtnPlayHover
    this.sfx.btnOver.play(); // play the button over sound
    }, this);
    // this.btnPlay.on("pointerout", () => {
    //   this.setTexture("sprBtnPlay");
    // });

    this.btnPlay.on("pointerdown",() =>{
      this.btnPlay.setTexture("sprBtnPlayDown");
      this.sfx.btnDown.play();
    }, this)

    // this.btnPlay.on("pointerup", () => {
    //   this.setTexture("sprBtnPlay");
    // }, this);

    this.btnPlay.on("pointerup", () => {
      this.btnPlay.setTexture("sprBtnPlay");
      this.scene.start("SceneMain");
    }, this);


    this.backgrounds = [];
for (let i = 0; i < 5; i++) {
  let keys = ["sprBg0", "sprBg1"];
  let key = keys[Phaser.Math.Between(0, keys.length - 1)];
  let bg = new ScrollingBackground(this, key, i * 10);
  this.backgrounds.push(bg);
  
}
  }

  update(){
    for (let i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
};