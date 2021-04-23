
const getAllUnvisitedNeighbors = (visitGrid, node) => {
  const [row, col] = node;
  let visitList = [];
  visitGrid[row]?.[col + 1] === false && visitList.push([row, col + 1]);
  visitGrid[row + 1]?.[col] === false && visitList.push([row + 1, col]);
  visitGrid[row]?.[col - 1] === false && visitList.push([row, col - 1]);
  visitGrid[row - 1]?.[col] === false && visitList.push([row - 1, col]);
  return visitList;
};

const getMinimumNeighbor = (distGrid, node) => {
  const [row, col] = node;
  let minVal = Infinity;
  let minNode = [];
  if (distGrid[row + 1]?.[col] < minVal) {
    minVal = distGrid[row + 1]?.[col];
    minNode = [row + 1, col]
  }
  if (distGrid[row - 1]?.[col] < minVal) {
    minVal = distGrid[row - 1]?.[col];
    minNode = [row - 1, col];
  }
  if (distGrid[row]?.[col + 1] < minVal) {
    minVal = distGrid[row]?.[col + 1];
    minNode = [row, col + 1];
  }
  if (distGrid[row]?.[col - 1] < minVal) {
    minVal = distGrid[row]?.[col - 1];
    minNode = [row, col - 1];
  }
  return minNode;
};

const getShortestRoute = (distGrid, endNode) => {
  let node = endNode;
  let shortestRoute = [];
  let distance = distGrid[node[0]][node[1]];
  while (distance > 1) {
    node = getMinimumNeighbor(distGrid, node);
    let [row, col] = node;
    shortestRoute.push(node);
    distance = distGrid[row][col];
  }
  return shortestRoute;
};

// Main Function
export const dijsktra = (grid, firstNode, endNode) => {
  if (!firstNode || !endNode) return [[],[]];

  let visitedNodesInOrder = [];
  let distGrid = [];
  let visitGrid = [];
  // initialize a distance and isVisited grid
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    let rowV = [];
    for (let j = 0; j < grid[i].length; j++) {
      row.push(Infinity);
      grid[i][j] === 'x' ? rowV.push(true) : rowV.push(false);
    }
    distGrid.push(row);
    visitGrid.push(rowV);
  }

  let [row, col] = firstNode;
  distGrid[row][col] = 0;

  let queue = [];
  let node = firstNode;
  while (((node[0] !== endNode[0]) || (node[1] !== endNode[1]))) {
    const [row, col] = node;
    let neighbors = getAllUnvisitedNeighbors(visitGrid, node);
    // determines neighbors distance
    for (let i = 0; i < neighbors.length; i++) {
      let [neighRow, neighCol] = neighbors[i];
      distGrid[neighRow][neighCol] = Math.min(distGrid[neighRow][neighCol], distGrid[row][col] + 1);
      visitGrid[neighRow][neighCol] = true;
    }

    queue.push(...neighbors);
    visitGrid[row][col] = true;

    // breaks out if trapped
    if (queue.length === 0) break;


    node = queue.shift();
    visitedNodesInOrder.push(node);
  }


  let shortestRoute = [];
  if ((node[0] === endNode[0]) && (node[1] === endNode[1])) {
    shortestRoute = getShortestRoute(distGrid, endNode)
    visitedNodesInOrder.pop();
  }
  return [visitedNodesInOrder, shortestRoute];
}
