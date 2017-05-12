var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');
var fs = require("fs");
// var inquirer = require("inquirer");

var question0 = new BasicCard("Who was the first president of the United States?", "George Washington");
var question1 = new BasicCard("Can underscore sign(_) be used to start a variable in Javascript(yes or now)?", "yes");
var question2 = new BasicCard("What character turns special characters into string character", "backslash");
var question3 = new BasicCard("can a variables value change during the execution of a script in Javascript?", "yes");

// var clozequestion0 = new ClozeCard(
//     "George Washington was the first president of the United States.", "Gerge Washington");
// var clozequestion1 = new ClozeCard(
//     "JavaScript is a high-level, dynamic, untyped, and interpreted run-time language. It has been standardized in the ECMAScript language specification.", "JavaScript");
// var clozequestion2 = new ClozeCard(
//     "MySQL is an open-source relational database management system (RDBMS)", "MySQL");
// var clozequestion3 = new ClozeCard(
//     "A simple method of knowing which JavaScript operation is asynchronous is to note if it requires a callback - the callback is the code that will get executed when the first operation is complete.", "asynchronous");

// fs.readFile("BasicLog.txt", "utf8", function(err,data){
// 	a=JSON.parse(data);
// 	console.log(a.front);
// 	console.log(a.back);
// });

fs.readFile("BasicLog.JSON", "utf8", function(err,data){
	var newarray=JSON.parse(data);

	console.log(newarray)
	newarray.push(question1);
	newarray.push(question2);
	newarray.push(question3);
	fs.writeFile("BasicLog.JSON", JSON.stringify(newarray));
});

// fs.writeFile("BasicLog.JSON", JSON.stringify(question0));