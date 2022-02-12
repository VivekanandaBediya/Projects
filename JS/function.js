// 3 types of function 
// 1.Normal function
// function normal_function(a,b){
//     return a+b;
// }

// let sum = normal_function(8,9);
// console.log(sum)

// 2.Function Expression 

// 3.IIFE - immediate invoke function expression 
function add(a,b){
    return a+b;
}
add(2,3) // calling the function

let additionIIFE = (function add(a,b){
    console.log(a+b);
})(20,30);

// console.log(additionIIFE);
// console.log(additionIIFE(30,40));
