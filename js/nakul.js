// // // const number = [1,2,3,4,5];
// // // let sum = 0;
// // // for (let i = 0; i<number.length; i++){
// // //     sum += number[i];
// // // }
// // // console.log("the sum of the array is:",sum);


// // // const elements = [1,2,3,4,5];
// // // for(let i=0; i<elements.length;  i++  ){
// // //     console.log(elements[i]);
// // // }


// // // const numbers = [4,9,2,7,5];
// // // let maxNumber = number[0];
// // // for (let i=0; i<numbers.length; i++){
// // //     if(numbers[i] > maxNumber){
// // //         maxNumber = numbers[i];
// // //     }
// // // }
// // // console.log("The maximum number is:",maxNumber);
// // // const numbersArrays = [10, 20, 25, 30, 40];
// // // const removeValue = 25;
// // // for (let i = 0; i < numbersArrays.length; i++) {
// // //   if (numbersArrays[i] === removeValue) {
// // //     numbersArrays.splice(i, 1);
// // //     break;
// // //   }
// // // }
// // // console.log("The updated array is:", numbersArrays);

// // // const element = [1, 2, 3, 4, 5];

// // // for (let i = 0; i < element.length; i++) {
// // //   console.log(element[i]);
// // // }
// // // // remove number 25 from an array
// // // const numbere = [10, 20, 30, 25, 40];
// // // const remove = 25;
// // // for(i=0; i < number.length; i++){
// // //     if(numbere[i] === remove){
// // //         numbere.splice(i,1);
// // //         break;
// // //     }
// // // } 
// // // console.log("the New array is",numbere);
// // // // maximaum number finding in the array
// // // const numbe = [4, 9, 2, 7, 5];
// // // let maxNumbe = numbers[0];

// // // for (let i = 1; i < numbe.length; i++) {
// // //   if (numbe[i] > maxNumbe) {
// // //     maxNumbe = numbe[i];
// // //   }
// // // }

// // // console.log("The maximum number in the array is:", maxNumbe);
// // // // reverce the array

// // // const arr = [1,2,3,4,5];
// // // for (let i=0; i<Math.floor(arr.length/2); i++){
// // //     const temp = arr[i];
// // //     arr[i] = arr[arr.length-1-i];
// // //     arr[arr.length-1-i] = temp;
// // // }

// // // console.log("The reversed array is ",arr);

// // // //palindromic sequence
// // // const word = "racecar"
// // // let ispalindrope = true;
// // // for(let i=0; i<Math.floor(word.length/2); i++){
// // //     if(word[i]!== word[word.length-1-i]){
// // //         ispalindrope = false;
// // //         break;
// // //     }
// // // }
// // // console.log("The word is",ispalindrope ? "a plindrome.":"not a plindrome")
// // // // find average of an array
// // // const num = [2,4,6,8,10];
// // // let su = 0;
// // // for(let i=0; i<num.length; i++){
// // //     su += num[i];
// // // }
// // // const average = su/num.length;
// // // console.log("The average is",average);
// // // let a = 3;
// // // let b = 4;
// // // let temp;

// // // console.log("before swaping: a=",a,"b =",b);

// // // temp = a;
// // // a = b;
// // // b = temp;
// // // console.log("after swaping: a=",a,"b =",b)
// // // // Area of a rectangle
// // // const width = 20;
// // // const length = 10;
// // // const area = width*length;
// // // console.log("The area of the rectangle",area);
// // // const n = 12345;
// // // let s = 0;
// // // let tem = n;
// // // while(tem>0){
// // //     s += tem%10;
// // //     tem = Math.floor(tem/10)
// // // }
// // // console.log("the sum is",s);
// // // const primeNumber = 17;
// // // let isPrime = true;
// // // if(primeNumber < 2){
// // //     isPrime = false;
// // // }
// // // else {
// // //     for(let i=2; i <= Math.sqrt(primeNumber); i++){
// // //         if(primeNumber%i === 0){
// // //          isPrime = false;
// // //          break;
// // //         }
// // //     }
// // // }
// // // console.log("The Number is",isPrime ?"prime":"not prime");
// // // const array = [12, 45, 9, 27, 6];
// // // let largestNumber = array[0];

// // // for(let i=0; i<array.length; i++){
// // //     if(array[i] > largestNumber) {
// // //         largestNumber = array[i];
// // //     }
// // // }
// // // console.log("The largest number is",largestNumber);
// // // // calculate discount.
// // // const originalPrice  = 120;
// // // const discountPercentage = 20;
// // // let discountedPrice;
// // // if(originalPrice > 100 && discountPercentage >= 10){
// // //     const discountAmount = (originalPrice * discountPercentage) / 100;
// // //   discountedPrice = originalPrice - discountAmount;
// // // } else{

// // // }
// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const searchvalue = 4;
// // let result = -1;
// // let startIndex = 0;

// // for (let index = Math.floor(array.length / 2); index < array.length;) {
// //   console.log("Array:", array);
// //   console.log("Current Index:", startIndex + index);

// //   if (searchvalue === array[index]) {
// //     console.log("Found at Index:", startIndex + index);
// //     result = startIndex + index;
// //     break;
// //   } else if (searchvalue < array[index]) {
// //     if (array.length > 2) {
// //       array = array.slice(0, index);
// //     } else {
// //       array = array[0];
// //       index = 0;
// //     }
// //   } else if (searchvalue > array[index]) {
// //     if (array.length > 2) {
// //       array = array.slice(index + 1, array.length);
// //     } else {
// //       array = array[array.length - 1];
// //       index = 0;
// //     }
// //     startIndex += index + 1;
// //   }
// // }

// // console.log("Result Index:", result);
// let array=[1,2,3,4,5,6,7,8,9] // [....10000000] //
// const searchvalue=4; // i=3
// //[1,2,3,4,5,6,7,8,9,10] i= 5-1 -- 0 -- 4
// //[1,2,3,4] -- 3 - 4
// //[4] --n -- 3, 

// //  = 2=i
// //i=2  2 < 5 
// let result = -1
// for (let index = Math.floor(array.length/2) ; index < array.length; index = Math.floor(array.length/2)) 
// {
//   console.log(array)
//   console.log(index)
// if(searchvalue === array[index]){
//     console.log("Found")
//     break;
// } 
//   else if(searchvalue < array[index]){
//     if (array.length >2 ){
//       array = array.splice(0,index);
//     }else{
//       array = array[0]
//     }
//   }else if(searchvalue > array[index]){
   
//     if (array.length >2 ){
//        array = array.splice(index,array.length);
//     }else{
//       array = array[array.length-1]
//     }
//   }
// }
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const searchvalue = 20;
let result = -1;
let start = 0;
let end = array.length - 1;

while (start <= end) {
  let index = Math.floor((start + end) / 2);

  console.log("Array:", array);
  console.log("Current Index:", index);
  console.log("Start:", start);
  console.log("End:", end);

  if (searchvalue === array[index]) {
    console.log("Found");
    result = index;
    break;
  } else if (searchvalue < array[index]) {
    end = index - 1;
  } else {
    start = index + 1;
  }
}

if (result !== -1) {
  console.log("The value is present at index:", result);
} else {
  console.log("Not Found");
}
