const request = require("request");
const cheerio = require("cheerio");

function getInforFromScorecard(url){
	console.log("from scorecards.js",url);
}

module.exports = {
	gifs:getInforFromScorecard
}