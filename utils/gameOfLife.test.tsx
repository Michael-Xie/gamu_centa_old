import { getCellState, getNextGrid, getNumNeighbours } from './gameOfLife';

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
  it('should return false when a dead cell doest not have 3 living neighbours', () => {
    expect(getCellState(false, 2)).toBe(false);
    expect(getCellState(false, 4)).toBe(false);
  });
});

describe('getNumNeighbours', () => {
  const grid2X2 = [
    [true, true],
    [true, false],
  ];
  const grid3X3 = [
    [false, true, true],
    [true, true, true],
    [true, true, true],
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
  it('should return 7 neighbours for centre cell', () => {
    expect(getNumNeighbours({ x: 1, y: 1 }, grid3X3)).toBe(7);
  });
});

describe('getNextGrid', () => {
  it('should return a grid where living cells die if they have fewer than 2 neighbours', () => {
    const allDeadGrid = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];
    expect(
      getNextGrid([
        [false, false, false],
        [false, true, true],
        [false, false, false],
      ])
    ).toEqual(allDeadGrid);
  });
  it('should return a grid where living cells die if they have more than 3 living neighbours', () => {
    expect(
      getNextGrid([
        [true, true, true],
        [true, true, false],
        [false, false, false],
      ])
    ).toEqual([
      [true, false, true],
      [true, false, true],
      [false, false, false],
    ]);
  });

  it('should return a grid where dead cells that have 3 living neigbours become alive', () => {
    expect(
      getNextGrid([
        [true, false, false],
        [false, false, false],
        [true, false, true],
      ])
    ).toEqual([
        [false, false, false],
        [false, true, false],
        [false, false, false],
    ]);
  });

  it('should return a grid where there is no change', () => {
    expect(
      getNextGrid([
        [false, true, false],
        [true, false, true],
        [false, true, false],
      ])
    ).toEqual([
      [false, true, false],
      [true, false, true],
      [false, true, false],
    ]);
  });
});
