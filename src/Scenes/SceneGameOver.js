// api key is Q8XS8Lw5MjG4biRqnKZG
import Phaser from 'phaser';
import ScrollingBackground from '../Entities/Scrolling';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "SceneGameOver" });
  }

  create() {
    let score = 0;
    let  scoreText;
    scoreText = this.add.text(100, 200, `Final score: ${score}`, {
      fontFamily: 'monospace',
      fontSize: 32,
      fontStyle: 'bold',
      color: '#024704',
      align: 'center'
    });

        function collectStar (){
      score += 10;
    scoreText.setText('Final score: ' + score);
}
    collectStar()

    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#f51d0a',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown"),
      
      
    }; 
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "restart"
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on("pointerup", () => {
      this.btnRestart.setTexture("restart");
      this.sfx.btnOver.play()
      this.scene.start("SceneMain");
    }, this);
    this.gameText = this.add.text(
      this.game.config.width * 0.35, 
      this.game.config.height * 0.48, 'Play Again', { fontSize: '24px', fill: '#fff' });

    this.btnMenu = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      "menu"
    );

    this.btnMenu.setInteractive();

    this.btnMenu.on("pointerup", () => {
      this.btnMenu.setTexture("menu");
      this.sfx.btnOver.play()
      this.scene.start("TitleScene");
    }, this);

    this.gameText = this.add.text(200, 435, 'Menu', { fontSize: '24px', fill: '#fff' });

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
}