
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
const number = [83,84,3,99,20];
let removeValue = 3;
let found = true;
for(let i=0; i < number.length; i++){
    if(removeValue === number[i]){
        number.splice(i,1);
        break;
    }
}
console.log("The updated array", number);

const elements = [1, 2, 3, 4, 5];

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
const numbers = [4, 9, 2, 7, 5];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log("The maximum number in the array is:", maxNumber);

const word = "racer"
let ispalindrope = true;
for(let i=0; i < Math.floor(word.length/2); i++){
  if(ispalindrope !== word[word.length-1-i]){
    ispalindrope = false;
    break;
  }
}

for(let i=0; i < number.length; i++){
    sum += number[i];
}
let average = sum/number.length;
console.log("The average is", average);
let a = 2;
let b = 3;
let temp;
console.log("Before swaping: a=",a,"b=",b);
temp = a;
a = b;
b = temp;
console.log("After swaping: a=",a,"b=",b);
//without using third variable
let n = 2;
let m = 3;
console.log("before swaping: n=",n,"m=",m);
n = m+n;
m = n - m;
n = n- m;
console.log("After swaping: n=",n,"m",m);
const num = 17;
let isPrime = true;
if(num < 2){
    isPrime = false;
}else{
    for(i=0; i <= Math.sqrt(num); i++ ){
        if(num % i === 0)
        isPrime = false;
    }
}
console.log("The number is", isPrime ? "prime." : "not prime.")
const string = "Hello World!";
const reversedString = string.split("").reverse().join("");
console.log("the string is reversed:", reversedString);
const arrays = [1,5,9,8,3];
let maxnum = arrays[i];
for(i=0; i <= arrays.length; i++){
    if(maxnum < arrays[i])
    maxnum = arrays[i];
}
console.log("The maximum number is: ", maxnum)
const originalPrice = 120;
const discountPercentage = 20;
let discountedPrice;

if (originalPrice > 100 && discountPercentage >= 10) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  discountedPrice = originalPrice - discountAmount;
} else {
  discountedPrice = originalPrice;
}

console.log("The discounted price is:", discountedPrice);
const rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  console.log(pattern);
}

const matrixA = [
  [1, 2],
  [3, 4],
];

const matrixB = [
  [5, 6],
  [7, 8],
];
function matrixAddition(matrixA, matrixB){
  const numRows = matrixA.length;
  const numCols = matrixA[0].length;
  const resultMatrix = [];
  for (let i=0; i < numRows; i++){
    resultMatrix[i] = [];
    for (let j = 0; j < numCols; j++) {
      resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

}
const matrixSum = matrixAddition(matrixA, matrixB);
console.log("Matrix Addition Result:", matrixSum);
