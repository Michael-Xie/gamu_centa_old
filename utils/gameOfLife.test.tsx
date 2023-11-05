import { getCellState, getNumNeighbours } from './gameOfLife';

describe('getCellState', () => {
  it('should return false when a living cell has less than 2 living neighbours', () => {
    expect(getCellState(true, 1)).toBe(false);
  });
  it('should return false when a living cell has more than 3 living neighbours', () => {
    expect(getCellState(true, 4)).toBe(false);
  });
  it('should return true when a dead cell has 3 living neighbours', () => {
    expect(getCellState(false, 3)).toBe(true);
  });
  it('should return true when a living cell has 2 or 3 living neighbours', () => {
    expect(getCellState(true, 3)).toBe(true);
    expect(getCellState(true, 2)).toBe(true);
  });
});

describe('getNumNeighbours', () => {
  const grid2X2 = [
    [true, true],
    [true, false],
  ];
  it('should return 2 neighbours for top left cell', () => {
    expect(getNumNeighbours({ x: 0, y: 0 }, grid2X2)).toBe(2);
  });
  it('should return 2 neighbours for top right cell', () => {
    expect(getNumNeighbours({ x: 0, y: 1 }, grid2X2)).toBe(2);
  });
  it('should return 2 neighbours for bottom left cell', () => {
    expect(getNumNeighbours({ x: 1, y: 0 }, grid2X2)).toBe(2);
  });
  it('should return 3 neighbours for bottom right cell', () => {
    expect(getNumNeighbours({ x: 1, y: 1 }, grid2X2)).toBe(3);
  });
});
