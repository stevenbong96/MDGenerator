// Declare the npm variables
var inquirer = require ("inquirer");
var fsFile = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");

// Declare the prompt for users
// inquirer.prompt([
//     {
//         name:"title",
//         type:"input",
//         message:"What is your project title?"
//     },
//     {
//         name:"description",
//         type:"input",
//         message:"Describe your project"
//     },
//     {
//         name:"installation",
//         type:"input",
//         message:"Provide installation instructions"
//     },
//     {
//         name:"usage",
//         type:"input",
//         message:"Provide usage information"
//     },
//     {
//         name:"contribution",
//         type:"input",
//         message:"Provide contribution guidelines"
//     },
//     {
//         name:"testinstruction",
//         type:"input",
//         message:"Provide test instructions"
//     },
//     {
//         name:"license",
//         type:"list",
//         message:"Select your preferred license",
//         choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License", "Apache 2.0", "MIT", "Boost Software 1.0", "The Unlicense"]
//     },
//     {
//         name:"username",
//         type:"input",
//         message:"What is your Github username?"
//     },
//     {
//         name:"githubRepo",
//         type:"input",
//         message:"What is your Github repo?"
//     },
//     {
//         name:"email",
//         type:"input",
//         message:"What is your email address?"
//     },
//     {
//         name:"methodCommunication",
//         type:"list",
//         message:"What is your preferred method of communciation?",
//         choices:["Email", "Text Message", "Phone"]
//     },
// ]).then(function(response){
//     console.log(response);
//     fsFile.writeFile("READMEGenerator.md", generateMarkdown(response), function(err){
//         if(err){
//             throw err
//         }
//         console.log("Success!!");
//     })
// })

inquirer.prompt([
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
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License", "Apache 2.0", "MIT", "Boost Software 1.0", "The Unlicense"]
    },
    {
        name:"username",
        type:"input",
        message:"What is your Github username?"
    },
    {
        name:"githubRepo",
        type:"input",
        message:"What is your Github repo?"
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
    const githubAPIUrl = `ttps://api.github.com/users/` + response.username;
    axios
    .get(githubAPIUrl)
    .then(function(resp){
        console.log(resp.data)
        console.log(resp.data.location);
        console.log(resp.data.avatar_url);
        // fsFile.writeFile("READMEGenerator.md", generateMarkdown(resp), function(err){
        //     if(err){
        //         throw err
        //     }
        //     console.log("Success!!");
        // })
    })
})

