function createMatrix(num) {
  let resultArr = [];
  for (let i = 0; i < num; i++) {
    resultArr.push([]);
    for (let j = 0; j < num; j++) {
      resultArr[i].push(0);
    }
  }
  return resultArr;
}

function printMatrix(matrix) {
  console.log("______________________________");

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}

let numberOfLines = 5;

function generatingFirstPlot(limit) {
  const numb = Math.floor(Math.random() * limit);
  return numb;
}

// function fourSidesCheck(matrix, one, two, matrixLimit, whereCheck, check2) {
//   if (matrixLimit) {
//     // matrix limit
//     if (whereCheck) {
//       // where to check
//       //check if it's last
//       if (check2) {
//         if (plotAPoint(matrix, one, two)) {
//           return;
//         }
//       }
//     }
//   }
// }

let myMatrix = createMatrix(numberOfLines);

let emptyMatrix = true;

let indexI = generatingFirstPlot(numberOfLines);
let indexJ = generatingFirstPlot(numberOfLines);

let plotSequence = []

function plotAPoint(matrix, plotA, plotB) {
  let random_boolean = Math.random() < 0.5;

  if (random_boolean) {
    matrix[plotA][plotB] = 100;
    indexI = plotA;
    indexJ = plotB;

    printMatrix(matrix);

    plotSequence.push([plotA, plotB])

    return true;
  }
}

function drawElement(matrix) {
  if (emptyMatrix) {
    matrix[indexI][indexJ] = 100;

    emptyMatrix = false;

    printMatrix(myMatrix);
  } else {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === 0) {
          // check right
          if (matrix[i][j + 1]) {
            // condition
            if (matrix[i][j + 1] !== 0) {
              //check if it's last
              if (i === indexI && j + 1 === indexJ) {
                if (plotAPoint(matrix, i, j)) {
                  return;
                }
              }
            }
          }

          //check below
          if (i < matrix.length - 1) {
            if (matrix[i + 1][j] !== 0) {
              //check if it's last
              if (i + 1 === indexI && j === indexJ) {
                if (plotAPoint(matrix, i, j)) {
                  return;
                }
              }
            }
          }

          //check left
          if (j > 0) {
            if (matrix[i][j - 1] !== 0) {
              //check if it's last
              if (i === indexI && j - 1 === indexJ) {
                if (plotAPoint(matrix, i, j)) {
                  return;
                }
              }
            }
          }

          //check above
          if (i > 0) {
            if (matrix[i - 1][j] !== 0) {
              // check if it's last
              if (i - 1 === indexI && j === indexJ) {
                if (plotAPoint(matrix, i, j)) {
                  return;
                }
              }
            }
          }
        }
      }
    } // end of double for loop

    console.log("I got here == > == reset the matrix and stop iteration");
    return;
  }
}

for (let k = 0; k < 9; k++) {
  drawElement(myMatrix);
}
