import Phaser from "phaser";

export default class UserNameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UserNameScene' });
  }

  preload(){
      
  }

  create() {
    this.userName = this.add.dom(this.game.config.width / 2)
    .createFromHTML('<input type="text" id="name" '
      + 'placeholder="Enter your name" value="" style="font-size: 24px">');


  this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

 
  this.returnKey.on('down', (e) => {
    const name = this.game.domContainer.querySelector('#name');

    if (name.value !== '') {
      
      this.scene.start('PreloaderScene');
    }
  });
  
  }
}
