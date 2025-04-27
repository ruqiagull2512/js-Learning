let score = "33"
let scores= true
console.log(typeof scores);
console.log(typeof score);
let valueInNumber= Number(score)
console.log( typeof valueInNumber);

// number conversion 
//"33"=>33
//"33abc"=>NAN
//true=>1 & false =>0

let number="33"
 
let isString= String(number)
console.log( typeof isString);

// operation
let value=3
let negValue=-value
console.log(negValue);

// console.log(2+2);
// console.log(2+2);
// console.log(2**2);
// console.log(2*2);
// console.log(2%2);
// console.log(2/2);

let str1="Hello"
let str2=" Ruqia"
let str3= str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);//if string is in first , whole will considered string (it result will be 122)
console.log(1+2+"2"); // if string is  in last, first will perform operation then write string(it result will be 32)

let gameCounter=100
++gameCounter; //pre-operator
gameCounter++; //post-operator
console.log(gameCounter);




