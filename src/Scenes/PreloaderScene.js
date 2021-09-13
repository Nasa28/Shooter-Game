import Phaser from "phaser";
import ScrollingBackground from "../Entities/Scrolling";
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: "PreloaderScene" });
  }

  init () {
    this.readyCount = 0;
  }

  preload(){
    let { width, height } = this.game.config;

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const loadingText = this.make.text({
      x: width * 0.5,
      y: height * 0.5- 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width * 0.5,
      y: height * 0.5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });


    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
     
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
 

    this.load.image("sprBg0", "assets/img/sprBg0.png");
    this.load.image("sprBg1", "assets/img/sprBg1.png");
    this.load.image("sprBtnPlay", "assets/img/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "assets/img/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "assets/img/sprBtnPlayDown.png");
    this.load.image("sprBtnRestart", "assets/img/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "assets/img/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "assets/img/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "assets/audio/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "assets/audio/sndBtnDown.wav");
  }
  create() {
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };
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

    this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE SHOOTER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#fffffa',
      align: 'center'
    });
    this.title.setOrigin(0.5);

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

ready() {
  this.readyCount += 1;
  if (this.readyCount === 2) {
    this.scene.start('Title');
  }
}
}

