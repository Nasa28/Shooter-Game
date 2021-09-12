import 'phaser';
export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super({key:'Options'});
  }
  preload () {

this.load.image("sprBtnPlay", "assets/img/sprBtnPlay.png");
this.load.image("sprBtnPlayHover", "assets/img/sprBtnPlayHover.png");
this.load.image("sprBtnPlayDown", "assets/img/sprBtnPlayDown.png");
this.load.image("sprBtnRestart", "assets/img/sprBtnRestart.png");
this.load.image("sprBtnRestartHover", "assets/img/sprBtnRestartHover.png");
this.load.image("sprBtnRestartDown", "assets/img/sprBtnRestartDown.png");

this.load.audio("sndBtnOver", "assets/audio/sndBtnOver.wav");
this.load.audio("sndBtnDown", "assets/audio/sndBtnDown.wav");
  }
  create () {
  }
};
