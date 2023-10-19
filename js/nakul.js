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