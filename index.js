// require statement to import inquirer package.
var inquirer = require("inquirer");

//inquirer .prompt method to prompt user with a series of questions
inquirer
  .prompt([
    {
      type: "input",
      message: "Title:",
      name: "title"
    },
    {
      type: "input",
      message: "Description:",
      name: "description"
    },
    {
      type: "input",
      message: "Table of Contents:",
      name: "tableOfContents"
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation"
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage"
    },
    {
      type: "input",
      message: "License:",
      name: "title"
    },
    {
      type: "input",
      message: "Contributing:",
      name: "contributing"
    },
    {
      type: "input",
      message: "Tests:",
      name: "tests"
    },
    {
      type: "input",
      message: "Questions:",
      name: "questions"
    },


  ])






// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
