
import Phaser from "phaser";
export default class CreditScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CreditScene' });
  }

  preload () {
  }

  create(){

    this.creditsText = this.add.text(0, 0, 'Created by:', { fontSize: '32px', fill: '#fff' });
this.madeByText = this.add.text(0, 0, 'Nasa', { fontSize: '40px', fill: '#fff' });
this.zone = this.add.zone(this.game.config.width * 0.5, this.game.config.height * 0.5, this.game.config.width, this.game.config.height);
Phaser.Display.Align.In.Center(
  this.creditsText,
  this.zone
);
Phaser.Display.Align.In.Center(
  this.madeByText,
  this.zone
);
this.madeByText.setY(1000);
this.creditsTween = this.tweens.add({
  targets: this.creditsText,
  y: -100,
  ease: 'Power1',
  duration: 2000,
  delay: 1000,
  onComplete: () => {
    this.destroy;
  }
});
this.madeByTween = this.tweens.add({
  targets: this.madeByText,
  y: -50,
  ease: 'Power1',
  duration: 8000,
  delay: 1000,
  onComplete: () => {
    this.madeByTween.destroy;
    this.scene.start('UserNameScene');
  }
});
  }
}