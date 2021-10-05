import ChaserShip from '../src/Entities/CarrierShip';
import Entity from '../src/Entities/Entity';

describe('ChaserShip should be a subclass of Entity', () => {
  it('Chaser is subclass of entity ', () => {
    expect(ChaserShip).toBeSubclassOf(Entity);
  });
});
