// Declare the npm variables
var inquirer = require ("inquirer");
var fsFile = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

// Declare the prompt for users
inquirer.prompt([
    {
        name:"title",
        type:"input",
        message:"What is your project title?"
    },
    {
        name:"tableContents",
        type:"input",
        message:"Put your table of contents"
    },
    {
        name:"description",
        type:"input",
        message:"Describe your project"
    },
    {
        name:"installation",
        type:"input",
        message:"Provide installation instructions"
    },
    {
        name:"usage",
        type:"input",
        message:"Provide usage information"
    },
    {
        name:"contribution",
        type:"input",
        message:"Provide contribution guidelines"
    },
    {
        name:"test",
        type:"input",
        message:"Provide test instructions"
    },
    {
        name:"license",
        type:"list",
        message:"Select your preferred license",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    },
    {
        name:"username",
        type:"input",
        message:"What is your Github username?"
    },
    {
        name:"githubRepo",
        type:"input",
        message:"What is your Github repo link?"
    },
    {
        name:"githubRepo",
        type:"input",
        message:"What is your email address?"
    },
    {
        name:"methodCommunication",
        type:"list",
        message:"What is your preferred method of communciation?",
        choices:["Email", "Text Message", "Phone"]
    },
]).then(function(response){
    console.log(response);
    fsFile.writeFile("READMEGenerator.md", generateMarkdown(response), function(err){
        if(err){
            throw err
        }
        console.log("Success!!");
    })
})

var test = {
    title: "test",
}

// array of questions for user
// const questions = [

// ];

// function to write README file
function writeToFile(fileName, data) {
    // fsFile.writeFile(fileName, JSON.stringify(data), function(err){
    //     if(err){
    //         throw err
    //     }
    //     console.log("Success!!");
    // })
}

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
