
const matrixA = [
    [2,5],
    [3,5],
];
const matrixB = [
    [2,4]
    [1,3]
];
const subtract = matrixSubtraction(matrixA,matrixB);
console.log("substract:",subtract);
function matrixSubtraction(matrixA,matrixB){
    const numrows = matrixA.length;
    const numcols = matrixA[0].length;
    const resultantMatrix = [];
    for(let i=0; i < numrows; i++){
        resultantMatrix[i] = [];
    for(let j=0; j < numcols; j++){
        resultantMatrix[i][j] = matrixA[i][j]+matrixB[i][j];

    }
    }
    return resultantMatrix;
}
const substract = matrixSubtraction(matrixA,matrixB)
console.log("the subtraction is",substract);


