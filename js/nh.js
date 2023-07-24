function matrixAddition(matrixA,matrixB){
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const resultMatrix = [];

    for(let i=0; i <numRows; i++ ){
        resultMatrix[i] = []
    for(let j=0; j <numCols; j++){
        resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return resultMatrix;
}

const matrixA = [
    [2,4],
    [3,4],
];
const matrixB = [
    [3,9],
    [1,6],
];

const matrixSum = matrixAddition(matrixA,matrixB);
console.log("matrix Addition result:",matrixSum);