import CarrierShip from '../src/Entities/CarrierShip'
import Entity from '../src/Entities/Entity'

describe('CarrierShip should be a subclass of Entity', () => {
  it('CarrierShip is subclass of entity ', () => {
    expect(CarrierShip).toBeSubclassOf(Entity);
  });

})


