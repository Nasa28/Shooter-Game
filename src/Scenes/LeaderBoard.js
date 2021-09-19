
export default class LeaderBoard extends Phaser.Scene{
   constructor() {
    super({ key: 'Leaderboard' });
    this.id = 'Q8XS8Lw5MjG4biRqnKZG';
  }

  init() {
    this.save= new LeaderBoard();
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

    this.save.getBoard().then((data) => {
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

  getBoard() {
    return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.id}/scores/`)
      .then(response => response.json())
      .catch((err) => new Error(err));
  }

  postScore(user, score) {
    return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.id}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ user, score }),
    }).then(response => response.json()).catch((err) => new Error(err));
  }
}

