// const api = require("../index");

// function to generate markdown for README
function generateMarkdown(response) {
  // console.log(response)
  // for(i=0;i<5;i++){
  //   console.log(i);
  //   if(response.license === "MIT"){
  //     var licenseMIT = `{}`
  //   }
  // }
  
  return `
  # ${response.title}

  ## Description 
  ${response.description}
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation 
  ${response.installation}
  ![Steps Installation](./steps.JPG) 

  ## Usage 
  ${response.usage}
    
  ## Contributions
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) 

  Total Contributors
  ![Contributors Badge](https://img.shields.io/github/contributors/${response.username}/${response.githubRepo})

  Language Contributions
  ![Top Languages](https://img.shields.io/github/languages/top/${response.username}/${response.githubRepo})
  
  ${response.contribution}

  ## Test Instruction  
  ${response.testinstruction}

  ## License 
  ![Badge for License](https://img.shields.io/github/${response.license}/${response.username}/${response.githubRepo}?color=green)

  ## Questions 
  ![Github Profile Picture](${response.picture})
  
  Github username: [@${response.username}](https://api.github.com/users/${response.username})

  If you have any questions, feel free to ${response.methodCommunication} me at ${response.email}
  `;

}

module.exports = generateMarkdown;

// ${data.license}
// ![Badge for License](https://img.shields.io/github/license/stevenbong96/MDGenerator?color=green)
