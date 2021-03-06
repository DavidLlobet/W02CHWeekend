let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const boardHTML = document.getElementsByClassName("board");
const column = document.getElementsByClassName("board__column");

let loop = null;

console.table(matrix);

function createDivs() {
  const newBoard = document.createElement("div");
  newBoard.className = "board__new-board";
  for (let i = 0; i < 10; i++) {
    const newDivColumn = document.createElement("div");
    newDivColumn.className = "board__column";
    boardHTML[0].appendChild(newBoard);
    newBoard.appendChild(newDivColumn);
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const newDivCell = document.createElement("div");
      newDivCell.classList.add("board__cell", "die");
      newDivCell.id = `${i}-${j}`;
      newDivCell.onclick = changeColor;
      column[i].appendChild(newDivCell);
    }
  }
}

function changeColor() {
  const position = this.id.split("-");
  const row = position[0];
  const cell = position[1];
  if (this.classList.contains("die")) {
    this.classList.remove("die");
    this.classList.add("live");
    matrix[row][cell] = 1;
  } else {
    this.classList.remove("live");
    this.classList.add("die");
    matrix[row][cell] = 0;
  }
  audio.play();
}

const audio = new Audio("../resources/LTTP_Rupee1.wav");

function checkNeighbours(matrix, i, j) {
  let count = 0;

  if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === 1) {
    count++;
  }
  if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
    count++;
  }
  if (i - 1 >= 0 && j + 1 <= matrix[i].length && matrix[i - 1][j + 1] === 1) {
    count++;
  }
  if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
    count++;
  }
  if (j + 1 <= matrix[i].length && matrix[i][j + 1] === 1) {
    count++;
  }
  if (i + 1 <= matrix.length - 1 && j - 1 >= 0 && matrix[i + 1][j - 1] === 1) {
    count++;
  }
  if (i + 1 < matrix.length && matrix[i + 1][j] === 1) {
    count++;
  }
  if (
    i + 1 < matrix.length &&
    j + 1 < matrix[i].length &&
    matrix[i + 1][j + 1] === 1
  ) {
    count++;
  }
  return count;
}

function transformBoard(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const cell = arr[i][j];
      if (cell === 0) {
        const dead = document.getElementById(`${i}-${j}`);
        dead.classList.remove("live");
        dead.classList.add("die");
      } else {
        const alive = document.getElementById(`${i}-${j}`);
        alive.classList.remove("die");
        alive.classList.add("live");
      }
    }
  }
}

function checkMatrix() {
  const newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const result = checkNeighbours(matrix, i, j);
      if (matrix[i][j] === 1) {
        if (result < 2) {
          newArr[i][j] = 0;
        } else if (result === 2 || result === 3) {
          newArr[i][j] = 1;
        } else if (result > 3) {
          newArr[i][j] = 0;
        }
      } else if (matrix[i][j] === 0) {
        if (result === 3) {
          newArr[i][j] = 1;
        } else {
          newArr[i][j] = 0;
        }
      }
    }
  }
  transformBoard(newArr);
  matrix = newArr;
  return newArr;
}

function bucle() {
  loop = setInterval(() => {
    checkMatrix();
  }, 1500);
}

function stop() {
  clearInterval(loop);
}

function cleanGame() {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0;
      const clean = document.getElementById(`${i}-${j}`);
      clean.classList.remove("live");
      clean.classList.add("die");
    }
  }
}

module.exports = {
  checkNeighbours,
  checkMatrix,
};
