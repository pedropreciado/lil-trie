function makeGrid(n) {
  let grid = [];
  for (let i = 0; i < n; i++) {
    let subArray = [];
    for (let j = 0; j < n; j++) {
      subArray.push(null);
    }

    grid.push(subArray);
  }

  return grid;
}

function checkRight(grid, i, j) {
  return grid[i] === undefined || grid[i][j + 1] === null;
}

function checkLeft(grid, i, j) {
  return grid[i] === undefined || Boolean(grid[i][j - 1]) === false;
}

function checkUp(grid, i, j) {
  return grid[i - 1] === undefined || grid[i - 1][j] === null;
}

function checkDown(grid, i, j) {
  return grid[i + 1] === undefined || grid[i + 1][j] === null;
}

function spiral(n) {
  let grid = makeGrid(n);

  let processes = [checkRight, checkDown, checkLeft, checkUp];
  let i = 0;
  let j = 0;
  let currentProcess = 0;
  let pendingChecks = 4;

  for (let num = 1; num < n * n; num ++) {
    console.log(i, j, currentProcess);
    if (pendingChecks === 0) {
      return grid;
    }
    if (!processes[currentProcess](grid, i, j)) {
      grid[i][j] = num;
      pendingChecks = 4;
    } else {
      currentProcess = (currentProcess + 1) % 4;
      pendingChecks -= 1;
    }

    switch (currentProcess) {
      case 0:
        j += 1;
        break;
      case 1:
        i += 1;
        break;
      case 2:
        j -= 1;
        break;
      case 3:
        i -= 1;
        break;
      default:
        i -= 1;
    }
  }
}

spiral(3)
