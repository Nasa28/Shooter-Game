import Phaser from "phaser";
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
    this.load.on('complete', () => {
      this.ready();
    });

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
    
  }


ready() {
  this.readyCount += 1;
  if (this.readyCount === 2) {
    this.scene.start('TitleScene');
  }
}
}

