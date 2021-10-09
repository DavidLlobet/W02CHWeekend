const matrix = [
  [0, 0, 0, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 0, 0, 0]
];


console.table(matrix);
let count1 = 0
let count2 = 0

function applyRules1(count1) {
  if (count1 < 2) {
    matrix[1][2] = 0;
  }
  if (count1 > 3) {
    matrix[1][2] = 0;
  }
}

function applyRules2(count2) {
  if (count2 < 3) {
    matrix[1][1] = 1;
  }
}

function countAdjacent(matrix) {

  for (let i=0; i<matrix.length; i++) {
    for (let j=1; j<matrix[i].length; j++) {
    
      if (matrix[0][0]) {
        topLeftCorner() 

        if(matrix[i-1][j-1] === 1) {
          count1 += 1;
        }
        if(matrix[i-1][j] === 1) {
          count1 += 1;
        }
        if(matrix[i-1][j+1] === 1) {
          count1 += 1;
        }
        if(matrix[i][j-1] === 1) {
          count1 += 1;
        }
        if(matrix[i][j+1] === 1) {
          count1 += 1;
        }
        if(matrix[i+1][j-1] === 1) {
          count1 += 1;
        }
        if(matrix[i+1][j] === 1) {
          count1 += 1;
        }
        if(matrix[i+1][j+1] === 1) {
          count1 += 1;
        }
        applyRules1(count1);
        count1 = 0;
      }

      if (matrix[i][j] === 0) {
        if(matrix[i-1][j-1] === 1) {
          count2 += 1;
        }
        if(matrix[i-1][j] === 1) {
          count2 += 1;
        }
        if(matrix[i-1][j+1] === 1) {
          count2 += 1;
        }
        if(matrix[i][j-1] === 1) {
          count2 += 1;
        }
        if(matrix[i][j+1] === 1) {
          count2 += 1;
        }
        if(matrix[i+1][j-1] === 1) {
          count2 += 1;
        }
        if(matrix[i+1][j] === 1) {
          count2 += 1;
        }
        if(matrix[i+1][j+1] === 1) {
          count2 += 1;
        }
        applyRules2(count2)
        count2 = 0;
        }
      }
       
      }
    }
  
function topLeftCorner() {
          
   
    if(matrix[i][j+1] === 1) {
      count1 += 1;
    }
    if(matrix[i+1][j] === 1) {
      count1 += 1;
    }
    if(matrix[i+1][j+1] === 1) {
      count1 += 1;
    }
    if(matrix[i][j+1] === 0) {
      count2 += 1;
    }
    if(matrix[i+1][j] === 0) {
      count2 += 1;
    }
    if(matrix[i+1][j+1] === 0) {
      count2 += 1;
    }
  
    applyRules1(count1);
    applyRules2(count2)
    count1 = 0;
    count2 = 0;
  }

  function leftBorder() {
   
    if(matrix[i-1][j] === 1) {
      count1 += 1;
    }
    if(matrix[i-1][j+1] === 1) {
      count1 += 1;
    }
    if(matrix[i][j+1] === 1) {
      count1 += 1;
    }
    if(matrix[i+1][j] === 1) {
      count1 += 1;
    }
    if(matrix[i+1][j+1] === 1) {
      count1 += 1;
    }
    if(matrix[i-1][j] === 0) {
      count2 += 1;
    }
    if(matrix[i-1][j+1] === 0) {
      count1 += 2;
    }
    if(matrix[i][j+1] === 0) {
      count1 += 2;
    }
    if(matrix[i+1][j] === 0) {
      count1 += 2;
    }
    if(matrix[i+1][j+1] === 0) {
      count1 += 2;
    }
    applyRules1(count1);
    applyRules2(count2)
    count1 = 0;
    count2 = 0;
  }

  function bottomLeftCorner() {
  
    if(matrix[i-1][j] === 1) {
      count2 += 1;
    }
    if(matrix[i-1][j+1] === 1) {
      count2 += 1;
    }
   
    if(matrix[i][j+1] === 1) {
      count2 += 1;
    }
    if(matrix[i-1][j] === 0) {
      count2 += 1;
    }
    if(matrix[i-1][j+1] === 0) {
      count1 += 2;
    }
    if(matrix[i][j+1] === 0) {
      count1 += 2;
    }
    applyRules1(count1);
    applyRules2(count2)
    count1 = 0;
    count2 = 0;
  }

  countAdjacent(matrix);

    
  console.table(matrix);





