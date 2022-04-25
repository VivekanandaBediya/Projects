let inputArr = process.argv.slice(2);
console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0];
switch(command){
	case "tree":
	   console.log("This is tree function.");
	   treeFn(inputArr[1]);
	   break;
	case "organize":
	   console.log("This is organize function.")
	   organizeFn(inputArr[1]);
	   break;

	case "help":
	   console.log("This is help function.");
	   helpFn(inputArr[1]);
	   break;
	default:
	   console.log("Please Input Right command");
	   break;
}

function treeFn(dirPath){

}
function organizeFn(dirPath){

}
function helpFn(dirPath){
	console.log(`
		List of All the commands:
		            node main.js tree "directoryPath"
		            node main.js organize "directoryPath"
		            node main.js help
		`)
}
