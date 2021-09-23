import CarrierShip from '../src/Entities/CarrierShip'
import Entity from '../src/Entities/Entity'

// jest.mock("../src/Entities/Player")

// describe('Returns a Json Object from API', () => {
  
//   it('The Data is an object', () => { 
//     const spy = jest.spyOn(Player, 'moveUp');
//     Player.moveUp();
//     expect(spy).toHaveBeenCalled();
// })
// })


test('Enemy Laser should be a subclass of Entity', () => {
  expect(CarrierShip).toBeSubclassOf(Entity);
});