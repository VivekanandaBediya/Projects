const request = require("request");
const cheerio = require("cheerio");

const {gifs} = require("./scorecards");

function getAllMatch(url){
	request(url,cb);
}
function cb(err,res,body){
	if(err){
		console.error("error",err);
	}else{
		extractAllMatchLink(body);
	}
}
function extractAllMatchLink(html){
	let selecTool = cheerio.load(html);
	let scorecardElemeArr = selecTool('a[data-hover]')
}