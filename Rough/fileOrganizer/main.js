
let helpFunc = require("./commands/help");

const inputArr = process.argv.slice(2);

console.log("inputArray : "+inputArr);

let commands = inputArr[0];

console.log("commands : "+commands);

switch(commands){
    case 'help':
        // console.log("This is help function .");
        helpFunc.hathi();
        break;

    case 'organizer':
        console.log("This is organizer function .")
        break;

    case 'tree':
        console.log("This is tree function .");
        break;

    default:
        console.log("Your are wrong!");
        break;
}