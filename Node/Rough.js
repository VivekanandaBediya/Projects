const fs = require("fs");

let inputarray = process.argv.slice(2);

let filearray = [];
let optionarray = [];

for(i=0;i<inputarray.length;i++){
    let firstChar = inputarray[i].charAt(3);
    if(firstChar=='-'){
        optionarray.push(inputarray[i]);   
    }
    else{
        filearray.push(inputarray[i])
    }
    
}




