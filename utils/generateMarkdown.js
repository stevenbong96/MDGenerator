// function to generate markdown for README
function generateMarkdown(data) {
  // for(i=0;i<5;i++){
  //   console.log(i);
  //   if(data.license === "MIT"){
  //     var licenseMIT = `{}`
  //   }
  // }

  return `# ${data.title}

  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## Contributions 
  ${data.contribution}

  ## Test Instruction  
  ${data.testinstruction}

  ## License 
  ![Badge for License](https://img.shields.io/github/${data.license}/${data.username}/${data.githubRepo}?color=green)

  ## Profile 
  ![Github Profile Picture]
  Github username: @${data.username}

  If you have any questions, feel free to ${data.methodCommunication} at ${data.email}
`;
}

module.exports = generateMarkdown;

// ${data.license}
// ![Badge for License](https://img.shields.io/github/license/stevenbong96/MDGenerator?color=green)
