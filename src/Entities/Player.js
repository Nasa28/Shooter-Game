import Phaser from 'phaser';
import Entity from './Entity';

export default class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, "Player");
    this.setData("speed", 100);
    this.play("sprPlayer");
  }

  moveUp() {
    this.body.velocity.y = -this.getData("speed");
  }
  
  moveDown() {
    this.body.velocity.y = this.getData("speed");
  }
  
  moveLeft() {
    this.body.velocity.x = -this.getData("speed");
  }
  
  moveRight() {
    this.body.velocity.x = this.getData("speed");
  }

  update(){
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprPlayer"
    ); 
  }
}