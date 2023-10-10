const number = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i<number.length; i++){
    sum += number[i];
}
console.log("the sum of the array is:",sum);
const arrays = [10, 20, 30, 40, 50];
const searchValue = 30;
let found = true;

for (let i = 0; i < arrays.length; i++) {
  if (array[i] === searchValue) {
    found = true;
    break;
  }
}

console.log("The element is", found ? "found" : "not found", "in the array.");
