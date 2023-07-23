
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
console.log("The word is",ispalindrope? "a palindrope":"not a plaindrope")
const number = [2,4,6,8,10,12];
let sum = 0;

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

