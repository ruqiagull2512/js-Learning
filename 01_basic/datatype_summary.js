//Data are of 2types
// 1.primitive datatype has 7 types
// String,number,Boolean, null,undefined, symbol, BigInt

let id= Symbol('123')
let anotherId= Symbol('123')
console.log(id==anotherId);


//References(non-premitive datatype) datatype
//Array, object, function
//javascript is dynamic datatype language
let stationary=["pen","copy","pencil"]
console.log(stationary);

let myOBj={
    name:"Ruqia",
    age:22
}
console.log(myOBj);


const myFunction= function(){
    console.log("hello Ruqia");
    
    
}


//datatype of undefined==> undefined
console.log(typeof undefined);

//datatype of null ==>object
    console.log(typeof null);
//datatype  of array==>object
    console.log(typeof stationary);
    

//datatype of object ==>object
    console.log(typeof myOBj);
    

//datatype of function==>function
    console.log(typeof myFunction);
    
    





