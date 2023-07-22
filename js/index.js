
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
console.log("The word is",ispalindrope? "a palindrope","not a plaindrope")