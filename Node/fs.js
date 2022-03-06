const fs = require("fs");

// let res = fs.appendFileSync("f1.txt","Hello i am f2 file")
// fs.appendFileSync("f1.txt","\nYou guys are smart")
// fs.appendFileSync("f1.txt","my name is vivekananda Bediya")
// console.log(res)

let data = fs.readFileSync("f1.txt","utf-8");
console.log(data+"");