// TODO: Include packages needed for this application
/*var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');*/

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },{
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Please describe the README.",
        name: "description"
    },{
        type: "input",
        message: "Please state your end-goal.",
        name: "endgoal"
    }
];


function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}
// TODO: Create a function to write README file
/*function writeToFile(fileName, data) { //{}
inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} ); 
};*/
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
init();

module.exports = questions;