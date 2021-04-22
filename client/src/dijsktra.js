
const getAllUnvisitedNeighbors = (visitGrid, node) => {
  const row = node[0];
  const col = node[1];
  let visitList = [];
  visitGrid[row]?.[col + 1] === false && visitList.push([row, col + 1]);
  visitGrid[row + 1]?.[col] === false && visitList.push([row + 1, col]);
  visitGrid[row]?.[col - 1] === false && visitList.push([row, col - 1]);
  visitGrid[row - 1]?.[col] === false && visitList.push([row - 1, col]);


  return visitList;
};

const getShortestRoute = (distGrid, endNode) => {
  let node = endNode;
  let shortList = [];
  let distance = disGrid[node[0]][node[1]];
  while (distance > 0) {
    let row = node[0];
    let col = node[1];

    let neighbors = [
      distGrid[row]?.[col + 1] || Infinity, // right
      distGrid[row + 1]?.[col] || Infinity, // down
      distGrid[row]?.[col - 1] || Infinity, // left
      distGrid[row - 1]?.[col] || Infinity, // up
    ];
    let min = Math.min(...neighbors);

  }
};

export const dijsktra = (grid, firstNode, endNode) => {
  let visitedNodesInOrder = [];
  let distGrid = [];
  let visitGrid = [];
  // initialize a distance and isVisited grid
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    let rowV = [];
    for (let j = 0; j < grid[i].length; j++) {
      row.push(Infinity);
      rowV.push(false);
    }
    distGrid.push(row);
    visitGrid.push(rowV);
  }

  let [row, col] = firstNode;
  distGrid[row][col] = 0;

  let queue = [];
  let node = firstNode;

  while ((node[0] !== endNode[0]) || (node[1] !== endNode[1])) {
    const row = node[0];
    const col = node[1];

    let neighbors = getAllUnvisitedNeighbors(visitGrid, node);

    // determines neighbors distance
    for (let i = 0; i < neighbors.length; i++) {
      let neighborNode = neighbors[i];
      let [neighRow, neighCol] = neighborNode;
      distGrid[neighRow][neighCol] = Math.min(distGrid[neighRow][neighCol], distGrid[row][col] + 1);
      visitGrid[neighRow][neighCol] = true;
    }

    queue.push(...neighbors);
    visitGrid[row][col] = true;
    node = queue.shift();
    visitedNodesInOrder.push(node);
  }

  visitedNodesInOrder.pop();


  const shortestRoute = getShortestRoute(distGrid, endNode);

  console.log(distGrid, visitGrid);
  return visitedNodesInOrder;
}
