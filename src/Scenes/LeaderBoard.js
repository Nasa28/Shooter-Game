import Phaser from "phaser";
import { getBoard } from './api/api'
export default class LeaderBoard extends Phaser.Scene{
   constructor() {
    super({ key: 'Leaderboard' });
    
  }

  create() {
    this.title = this.add.text(
      this.game.config.width * 0.5,
      100,
      'LEADERBOARD',
      {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#03fc07',
        align: 'center',
      },
    );
    this.title.setOrigin(0.5);
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    getBoard().then((data) => {
      const sorted = data.result.sort(
        (a, b) => b.score - a.score,
      );
      let height = 150;
      for (let i = 0; i < 7; i++) {
        this.add.text(
          this.game.config.width * 0.25,
          height,
          `${i + 1}. ${sorted[
            i
          ].user.toUpperCase()}........${
            sorted[i].score
          }`,
          {
            fontFamily: 'monospace',
            fontSize: 24,
            fontStyle: 'bold',
            align: 'center',
            color: '#ffffff',
          },
        );
        height += 50;
      }
    })
    .catch((err) => err);


    this.btnMenu = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      "menu"
    );

    this.btnMenu.setInteractive();

    this.btnMenu.on("pointerup", () => {
      this.btnMenu.setTexture("menu");
      this.sfx.btnOver.play()
      this.scene.start("TitleScene");
    }, this);

    this.gameText = this.add.text(200, 500, 'Menu', { fontSize: '24px', fill: '#fff' });

  }

}

