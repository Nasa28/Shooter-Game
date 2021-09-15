import Phaser from "phaser";

export default class UserNameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UserNameScene' });
  }

  preload(){
      
  }
  create() {
    this.userName = this.add.dom(this.game.config.width * 0.5)
    .createFromHTML('<input type="text" id="name" '
      +  'value="" placeholder="Enter your name" style="font-size: 24px">');

    
  this.submit = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

 
  this.submit.on('down', (e) => {
    const name = this.game.domContainer.querySelector('#name');

    if (name.value !== '') {
      
      this.scene.start('PreloaderScene');
    }
  });
  
  }
}
