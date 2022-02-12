//variable declaration
var a;  //int string float?

//variable initilization
a = 10;
console.log(typeof a)
console.log(a)

a = "hello";
console.log(a); //re initialization

//typeof operator->it tells us the type of data stored in a variable
console.log(typeof a);

a = true;
console.log(a);
console.log(typeof a);


a = null;
console.log(a)
console.log(typeof a);

//Number
var num = 10;
console.log(num)
num =2.4;
console.log(num)

//Boolean
var t = true;
var f = false;
console.log(t);
console.log(f);

//String
// '',"",``
// single quotes,double quotes,backtick
var str = 'a'
console.log(typeof str);
var str = "How are you?";
console.log(str);

var b = `hi hope you guys are
 able grasp the concepts`;
console.log(b)

var num = 200;
console.log(`half of ${num} is ${num/2}`);


//var has some problem
//1.) redeclaration is allowed
var r = "hello";
console.log(r);

var r = 100;
console.log(r)

// overcome krne ke liye 
//let keyword is used
let l=100;
console.log(l);

//let l = "200"; //SyntaxError:Identifier 'l' has alrady been declared
//console.log(l);

// we can reinitialize a variable but we cannot redeclare it 
l =300;
console.log(l)


//loops in js
var num = 10;
for (var i=0;i<num;i++){
    if(i%2==0){
        console.log("num is even");
    }
}


//const keyword
//const a =2;
//console.log(a);
// na his redeclare na reinitialize 
//const a =5;
//a = 4; //TypeError: Assignment to constant variable
//console.log("key");
