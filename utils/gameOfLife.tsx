export const getCellState = (isAlive: boolean, numNeighbours: number) => {
  if (isAlive && numNeighbours < 2) return false;
  if (isAlive && numNeighbours > 3) return false;
  if (!isAlive && numNeighbours === 3) return true;
  return true;
};

type CellPosition = {
  x: number;
  y: number;
};

type Grid = boolean[][];
export const getNumNeighbours = ({ x, y }: CellPosition, currentGrid: Grid) => {
  const canGoRight = y < currentGrid[0].length - 1;
  const canGoDown = x < currentGrid.length - 1;
  const canGoLeft = y > 0;
  const canGoUp = x > 0;

  let numAlive = 0;
  if (canGoRight) numAlive += Number(currentGrid[x][y + 1]);
  if (canGoDown) numAlive += Number(currentGrid[x + 1][y]);
  if (canGoDown && canGoRight) numAlive += Number(currentGrid[x + 1][y + 1]);
  if (canGoLeft) numAlive += Number(currentGrid[x][y - 1]);
  if (canGoDown && canGoLeft) numAlive += Number(currentGrid[x + 1][y - 1]);
  if (canGoUp) numAlive += Number(currentGrid[x - 1][y]);
  if (canGoUp && canGoRight) numAlive += Number(currentGrid[x - 1][y + 1]);
  if (canGoUp && canGoLeft) numAlive += Number(currentGrid[x - 1][y - 1]);
  return numAlive;
};
