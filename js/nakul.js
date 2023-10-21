const number = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i<number.length; i++){
    sum += number[i];
}
console.log("the sum of the array is:",sum);


const elements = [1,2,3,4,5];
for(let i=0; i<elements.length;  i++  ){
    console.log(elements[i]);
}

const numbers = [4,9,2,7,5];
let maxNumber = number[0];
for (let i=0; i<numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
}
console.log("The maximum number is:",maxNumber);
const numbersArrays = [10, 20, 25, 30, 40];
const removeValue = 25;

for (let i = 0; i < numbersArrays.length; i++) {
  if (numbersArrays[i] === removeValue) {
    numbersArrays.splice(i, 1);
    break;
  }
}
console.log("The updated array is:", numbersArrays);

const element = [1, 2, 3, 4, 5];

for (let i = 0; i < element.length; i++) {
  console.log(element[i]);
}
// remove number 25 from an array
const numbere = [10, 20, 30, 25, 40];
const remove = 25;
for(i=0; i < number.length; i++){
    if(numbere[i] === remove){
        numbere.splice(i,1);
        break;
    }
} 
console.log("the New array is",numbere);
// maximaum number finding in the array
const numbe = [4, 9, 2, 7, 5];
let maxNumbe = numbers[0];

for (let i = 1; i < numbe.length; i++) {
  if (numbe[i] > maxNumbe) {
    maxNumbe = numbe[i];
  }
}

console.log("The maximum number in the array is:", maxNumbe);
// reverce the array

const arr = [1,2,3,4,5];
for (let i=0; i<Math.floor(arr.length/2); i++){
    const temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}

console.log("The reversed array is ",arr);
