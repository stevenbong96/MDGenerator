// function to generate markdown for README
function generateMarkdown(data) {
  for(i=0;i<5;i++){
    console.log(i);
  }
  return `# ${data.title} is the title of my project
  ${data.tableContents}
  ${data.description}
  ${data.installation}
  ${data.usage}
  
`;
}

module.exports = generateMarkdown;
