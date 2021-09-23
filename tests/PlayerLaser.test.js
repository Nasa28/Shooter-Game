import PlayerLaser from '../src/Entities/EnemyLaser';
import Entity from '../src/Entities/Entity';

describe('EnemyLaser should be a subclass of Entity', () => {
  it('EnemyLaser is subclass of entity ', () => {
    expect(PlayerLaser).toBeSubclassOf(Entity);
  });
});