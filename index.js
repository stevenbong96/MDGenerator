// Declare the npm variables
var inquirer = require ("inquirer");
var fsFile = require("fs");

// Declare the prompt for users
inquirer.prompt([
    {

    }
]).then(function(response){
    console.log(response);
    fsFile.writeFile("README.md", JSON.stringify(response), function(err){
        if(err){
            throw err
        }
        console.log("Success!!");
    })
})