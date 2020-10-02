// Declare the npm variables
var inquirer = require ("inquirer");
var fsFile = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var getInfo = require("./utils/githubAPI")

// Declare the prompt for users
// let objData = {};

inquirer.prompt([
    {
        name:"username",
        message:"What is your Github username?"
    }
    ]).then(function(APICall){
        return getInfo.getInfo(APICall.username)
    }).then(function(apiRes){
    inquirer.prompt([ 
    {
        name:"githubRepo",
        type:"input",
        message:"What is your Github repo?"
    },
    {
        name:"title",
        type:"input",
        message:"What is your project title?"
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
        name:"testinstruction",
        type:"input",
        message:"Provide test instructions"
    },
    {
        name:"license",
        type:"list",
        message:"Select your preferred license",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License", "Apache 2.0", "MIT License", "Boost Software 1.0", "Unlicense"]
    },
    {
        name:"email",
        type:"input",
        message:"What is your email address?"
    },
    {
        name:"phone",
        type:"input",
        message:"What is your phone number?"
    },
    {
        name:"methodCommunication",
        type:"list",
        message:"What is your preferred method of communciation?",
        choices:["email", "text message", "phone"]
    },
]).then(function(response){
    // console.log(response);
    fsFile.writeFile("README.md", generateMarkdown({...apiRes, ...response}), function(err){
        if(err){
            throw err
        }
        console.log("Success!!");
    })
})
    })