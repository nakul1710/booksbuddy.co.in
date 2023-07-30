

/*const number= 12345;
let sum = 0;
let temp = number;
while(temp>0){
    sum += temp%10;
    Math.floor(temp/10);
}
console.log("the sum of the number:",sum);*/
const primeNumber = 17;
let isPrime = true;
if(primeNumber < 2){
  isPrime = false;
}else {
    for(i=2; i <= Math.sqrt(primeNumber); i++ ){
        if(primeNumber%i === 0){
            isPrime = true;
            break;
        }

    }
}
